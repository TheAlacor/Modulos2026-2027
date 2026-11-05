// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFDouWjE6-qNFvVJSR1BkL9ohuLZTpSs",
  authDomain: "pizarrapostits.firebaseapp.com",
  projectId: "pizarrapostits",
  storageBucket: "pizarrapostits.firebasestorage.app",
  messagingSenderId: "68870766665",
  appId: "1:68870766665:web:2b1a0c30d0c52864087f98"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "postits");

// Elementos del DOM
const board = document.getElementById("board");
const fab = document.getElementById("fab");
const noteModal = document.getElementById("note-modal");
const confirmModal = document.getElementById("confirm-modal");
const noteText = document.getElementById("note-text");
const btnSaveNote = document.getElementById("btn-save-note");
const btnCancelNote = document.getElementById("btn-cancel-note");
const btnConfirmDelete = document.getElementById("btn-confirm-delete");
const btnCancelDelete = document.getElementById("btn-cancel-delete");
const colorButtons = document.querySelectorAll(".color-btn");

// Variables del Estado Global de la App
let editingNoteId = null;
let selectedColor = "#fff59d";
let pendingDeleteId = null;
let pendingDeleteElement = null;

// ==========================================
//   01. MODALES Y EVENTOS DE INTERFAZ (UI)
// ==========================================

// Selección de color en el modal
colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    colorButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedColor = btn.dataset.color;
  });
});

// Abrir modal para Crear Nota
fab.addEventListener("click", () => {
  editingNoteId = null;
  document.getElementById("modal-title").innerText = "Nueva Nota";
  noteText.value = "";
  noteModal.classList.remove("hidden");
});

// Cerrar modal de nota
btnCancelNote.addEventListener("click", () => {
  noteModal.classList.add("hidden");
});

// Guardar o Actualizar Nota en Firebase
btnSaveNote.addEventListener("click", async () => {
  const text = noteText.value.trim();
  if (!text) return;

  if (editingNoteId) {
    // ACTUALIZAR (Update)
    const noteRef = doc(db, "postits", editingNoteId);
    await updateDoc(noteRef, { text, color: selectedColor });
  } else {
    // CREAR (Create) en el centro de la pantalla
    const centerX = (window.innerWidth / 2) - 80;
    const centerY = (window.innerHeight / 2) - 80;

    await addDoc(notesCollection, {
      text: text,
      color: selectedColor,
      coordenadaX: centerX,
      coordenadaY: centerY,
      fechaCreacion: serverTimestamp()
    });
  }

  noteModal.classList.add("hidden");
});

// ==========================================
//   02. LEER Y SINCRONIZAR (Read en Tiempo Real)
// ==========================================
onSnapshot(notesCollection, (snapshot) => {
  // Limpiamos notas existentes para reconstruir según el snapshot
  board.innerHTML = "";

  snapshot.docs.forEach(docSnap => {
    const data = docSnap.data();
    const noteEl = createNoteElement(docSnap.id, data);
    board.appendChild(noteEl);
  });
});

// Crea el elemento DOM del Post-it y le asigna el controlador de eventos táctiles
function createNoteElement(id, data) {
  const div = document.createElement("div");
  div.className = "postit";
  div.id = `note-${id}`;
  div.innerText = data.text;
  div.style.backgroundColor = data.color;
  div.style.left = `${data.coordenadaX}px`;
  div.style.top = `${data.coordenadaY}px`;
  div.dataset.id = id;

  // Asignar el controlador táctil completo
  attachTouchController(div, data);

  return div;
}

// ==========================================
//   03. CONTROLADOR TÁCTIL Y GESTOS (TOUCH)
// ==========================================
function attachTouchController(element, data) {
  let startX = 0, startY = 0;       // Coordenadas iniciales del toque
  let initialX = data.coordenadaX;  // Posición X actual de la nota
  let initialY = data.coordenadaY;  // Posición Y actual de la nota
  
  let currentDeltaX = 0;
  let isDragging = false;
  let isSwiping = false;

  // Control para Doble Tap
  let lastTapTime = 0;

  element.addEventListener("touchstart", (e) => {
    // Solo manejamos el primer toque
    if (e.touches.length > 1) return;
    
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;

    // Obtener la posición actual leyendo el estilo
    initialX = parseFloat(element.style.left) || 0;
    initialY = parseFloat(element.style.top) || 0;

    isDragging = false;
    isSwiping = false;

    // --- DETECCIÓN DE DOBLE TAP ---
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;
    
    if (tapLength < 300 && tapLength > 0) {
      // Es un doble tap -> Abrir Modal para Editar
      e.preventDefault();
      openEditModal(element.dataset.id, element.innerText, data.color);
      lastTapTime = 0;
      return;
    }
    lastTapTime = currentTime;
  }, { passive: false });

  element.addEventListener("touchmove", (e) => {
    if (e.touches.length > 1) return;
    const touch = e.touches[0];

    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    // Determinar si el movimiento es predominantemente Horizontal (Swipe) o Libre (Drag)
    if (!isDragging && !isSwiping) {
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        isSwiping = true; // Intención de swipe
      } else if (Math.abs(deltaY) > 10 || Math.abs(deltaX) > 10) {
        isDragging = true; // Intención de mover
      }
    }

    if (isSwiping) {
      // Gestos de Swipe: Desplazamiento horizontal con ligera rotación visual
      e.preventDefault();
      currentDeltaX = deltaX;
      const rotation = deltaX * 0.1;
      element.style.transform = `translate(${deltaX}px, 0px) rotate(${rotation}deg)`;
    } else if (isDragging) {
      // Arrastre libre: Evitar scroll de pantalla
      e.preventDefault();
      const newX = initialX + deltaX;
      const newY = initialY + deltaY;

      element.style.left = `${newX}px`;
      element.style.top = `${newY}px`;
    }
  }, { passive: false });

  element.addEventListener("touchend", async (e) => {
    // --- EVALUAR COMPLETITUD DEL SWIPE ---
    if (isSwiping) {
      // Si el desplazamiento horizontal superó los 100px, se activa el flujo de confirmación de borrado
      if (Math.abs(currentDeltaX) > 100) {
        promptDelete(element.dataset.id, element);
      } else {
        // Restaurar posición original con animación CSS si el swipe no fue suficiente
        resetNoteTransform(element);
      }
      isSwiping = false;
      return;
    }

    // --- GUARDAR POSICIÓN DE ARRASTRE EN FIREBASE ---
    if (isDragging) {
      isDragging = false;
      const finalX = parseFloat(element.style.left);
      const finalY = parseFloat(element.style.top);

      // Actualizar coordenadas en la base de datos
      const noteRef = doc(db, "postits", element.dataset.id);
      await updateDoc(noteRef, {
        coordenadaX: finalX,
        coordenadaY: finalY
      });
    }
  });
}

// Función auxiliar para restablecer suavemente la nota a su lugar tras cancelar swipe
function resetNoteTransform(element) {
  element.classList.add("resetting");
  element.style.transform = "translate(0, 0) rotate(0deg)";
  setTimeout(() => {
    element.classList.remove("resetting");
  }, 300);
}

// ==========================================
//   04. FLUJO DE BORRADO CON CONFIRMACIÓN
// ==========================================
function promptDelete(id, element) {
  pendingDeleteId = id;
  pendingDeleteElement = element;
  confirmModal.classList.remove("hidden");
}

// Confirmar Borrado
btnConfirmDelete.addEventListener("click", async () => {
  if (pendingDeleteId) {
    const noteRef = doc(db, "postits", pendingDeleteId);
    await deleteDoc(noteRef); // Se elimina definitivamente en Firebase
    pendingDeleteId = null;
    pendingDeleteElement = null;
  }
  confirmModal.classList.add("hidden");
});

// Cancelar Borrado (Restituir la nota)
btnCancelDelete.addEventListener("click", () => {
  if (pendingDeleteElement) {
    resetNoteTransform(pendingDeleteElement);
  }
  pendingDeleteId = null;
  pendingDeleteElement = null;
  confirmModal.classList.add("hidden");
});

// Modal para Editar Nota existente
function openEditModal(id, currentText, currentColor) {
  editingNoteId = id;
  document.getElementById("modal-title").innerText = "Editar Nota";
  noteText.value = currentText;
  selectedColor = currentColor;

  colorButtons.forEach(b => {
    b.classList.toggle("selected", b.dataset.color === currentColor);
  });

  noteModal.classList.remove("hidden");
}