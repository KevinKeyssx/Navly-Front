<script lang="ts">
    import { onMount } from 'svelte';
  
    let searchTerm: string = '';
    
    // Para acceder directamente a los elementos sin re-renderizados innecesarios
    let elements: HTMLElement[] = [];
  
    // Función para resaltar texto
    const highlightTextNodes = (node: Node, search: string) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const originalText = node.textContent || '';
        if (!search) return;
  
        // Usar RegExp para encontrar todas las coincidencias
        const regex = new RegExp(`(${search})`, 'gi');
        const highlightedText = originalText.replace(regex, `<mark class="bg-yellow-300">$1</mark>`);
  
        // Si el texto ha cambiado, se reemplaza el nodo
        if (highlightedText !== originalText) {
          const span = document.createElement('span');
          span.innerHTML = highlightedText;
          (node as ChildNode).replaceWith(...span.childNodes); // Reemplaza solo las coincidencias
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Recursivamente aplicar el resaltado a sus hijos
        for (let i = 0; i < node.childNodes.length; i++) {
          highlightTextNodes(node.childNodes[i], search);
        }
      }
    };
  
    // Función para limpiar los resaltados anteriores
    const clearHighlights = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        element.innerHTML = element.innerHTML.replace(/<mark class="bg-yellow-300">(.+?)<\/mark>/gi, '$1');
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        clearHighlights(node.childNodes[i]);
      }
    };
  
    // Función para resaltar los elementos con id 'linkstyle'
    const highlightAllElements = () => {
      // Limpiar los resaltados existentes
      elements.forEach((element) => {
        clearHighlights(element);
        highlightTextNodes(element, searchTerm);
      });
    };
  
    // Usamos `bind:this` para evitar el re-renderizado de los elementos
    onMount(() => {
      elements = Array.from(document.querySelectorAll('#linkstyle'));
      highlightAllElements(); // Aplicar el resaltado cuando se monta el componente
    });
  
    // Reactividad solo en el input de búsqueda
    $: searchTerm, highlightAllElements();
  </script>
  
  <input 
    type="text" 
    bind:value={searchTerm} 
    placeholder="Buscar..." 
    class="p-2 border rounded w-full mb-4 text-zinc-800"
  />
  

  
  <style>
    mark {
      background-color: #facc15; /* Color de resaltado de Tailwind */
    }
  </style>
  