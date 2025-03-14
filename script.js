
const cursos = [
     {
        id: 1,
        titulo: "Máster en Inteligencia Artificial",
        categoria: "Tecnología",
        imagen: "https://i.ibb.co/1f6QLnNz/docentes-2.jpg",
        objetivo: "Domina las últimas técnicas de IA y machine learning aplicadas a proyectos reales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Nuevo"
    },

    {
        id: 2,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 3,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 4,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 5,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 6,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 7,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 8,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 9,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 10,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
    {
        id: 11,
        titulo: "Diseño UX/UI Profesional",
        categoria: "Diseño",
        imagen: "https://i.ibb.co/4wDSvwBT/recursos.jpg",
        objetivo: "Aprende a crear interfaces modernas y experiencias de usuario excepcionales.",
        brochure: "https://drive.google.com/file/d/1W_0M2s0vK5QHctnqTMeGP0F0a2-f2wk0/preview",
        contacto: "71014010",
        estado: "Popular"
    },
];

function renderCourse(course, isSharedView = false) {
    const urlParams = new URLSearchParams(window.location.search);
    const isSingleCourse = urlParams.has('course');
    
    return `
        <div class="course-card">
            <div class="course-image" style="background-image: url('${course.imagen}')">
                ${course.estado ? `<div class="course-badge">${course.estado}</div>` : ''}
            </div>
            <div class="course-category">${course.categoria}</div>
            <h2 class="course-title">${course.titulo}</h2>
            <div class="course-objective">${course.objetivo}</div>
            <div class="button-group">
                <button class="btn btn-primary" 
                onclick="window.open('https://wa.me/${course.contacto}?text=Hola,%20estoy%20interesado%20en%20el%20curso:%20${encodeURIComponent(course.titulo)}.%0A%0A__________________________________%0A%0A👤Nombre%20completo:%0A[Tu%20Nombre]%0A%0A🆔CI:%0A[Tu%20CI]%0A%0A👨🏽‍🔬Profesión:%0A[Tu%20Profesión]%0A__________________________________________', '_blank')"
                    <i class="fab fa-whatsapp"> Contactar
                </button>
                <button class="btn btn-secondary brochure-btn" onclick="showBrochure('${course.brochure}')">
                    <i class="fas fa-file-pdf" style="color: #ff8100;"></i> Brochure
                </button>

                ${!isSharedView && !isSingleCourse ? `
                <button class="btn btn-primary" 
                        onclick="copyCourseLink(${course.id})">
                    <i class="fas fa-link" style="color: #ff8100;"></i>Copiar
                </button>` : ''}
            </div>
        </div>
    `;
}

function renderCatalog() {
    const container = document.getElementById('mainContent');
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    const isSharedView = urlParams.has('view');
    
    let content = '';
    
    if(courseId) {
        const course = cursos.find(c => c.id == courseId);
        content = course ? `
            ${renderCourse(course, true)}
            <button class="btn btn-all-courses" onclick="showAllCourses()">
                <i class="fas fa-list"></i> Ver Todos los Programas
            </button>
        ` : '<div>Curso no encontrado</div>';
    } else {
        content = `
            ${isSharedView ? '' : `
            <button class="btn btn-all-courses" onclick="copyCatalogLink()">
                <i class="fas fa-laptop-code" style="color: black;"></i>Enviar todo
            </button>
            `}
            <div class="course-grid">
                ${cursos.map(course => renderCourse(course, isSharedView)).join('')}
            </div>
        `;
    }
    
    container.innerHTML = content;
}

function showAllCourses() {
    const url = new URL(window.location);
    url.searchParams.delete('course');
    url.searchParams.set('view', 'shared');
    window.history.pushState({}, '', url);
    renderCatalog();
}

function copyCourseLink(courseId) {
    const link = `${window.location.origin}${window.location.pathname}?course=${courseId}`;
    navigator.clipboard.writeText(link).then(showToast);
}

function copyCatalogLink() {
    const link = `${window.location.origin}${window.location.pathname}?view=shared`;
    navigator.clipboard.writeText(link).then(showToast);
}

function showBrochure(url) {
    document.getElementById('pdfFrame').src = url;
    document.getElementById('pdfModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('pdfModal').style.display = 'none';
    document.getElementById('pdfFrame').src = '';
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
}

// Manejar cambios de URL
window.addEventListener('popstate', renderCatalog);

// Inicialización
document.addEventListener('DOMContentLoaded', renderCatalog);

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    const modal = document.getElementById('pdfModal');
    if(event.target == modal) {
        closeModal();
    }
}

// Agrega este código JavaScript
document.getElementById('searchInput').addEventListener('input', function(e) {
    const termino = e.target.value.toLowerCase();
    const resultados = cursos.filter(curso => {
        return (
            curso.titulo.toLowerCase().includes(termino) ||
            curso.categoria.toLowerCase().includes(termino) ||
            curso.objetivo.toLowerCase().includes(termino)
        );
    });
    
    renderCatalog(resultados);
});

// Modifica la función renderCatalog existente
function renderCatalog(courses = cursos) {
    const container = document.getElementById('mainContent');
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    const isSharedView = urlParams.has('view');
    
    let content = '';
    
    if(courseId) {
        const course = cursos.find(c => c.id == courseId);
        content = course ? `
            ${renderCourse(course, true)}
            <button class="btn btn-all-courses" onclick="showAllCourses()">
                <i class="fas fa-list"></i> Ver Todos los Programas
            </button>
        ` : '<div>Curso no encontrado</div>';
    } else {
        content = `
            ${isSharedView ? '' : `
            <button class="btn btn-all-courses" onclick="copyCatalogLink()">
                <i class="fas fa-link"></i> Copiar Enlace de Catálogo
            </button>`}
            <div class="course-grid">
                ${courses.map(course => renderCourse(course, isSharedView)).join('')}
            </div>
        `;
    }
    
    container.innerHTML = content;
}
