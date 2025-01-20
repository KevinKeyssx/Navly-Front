<script lang="ts">
    import { onMount }    from 'svelte';
    import { fade, fly }  from 'svelte/transition';
    import { cubicOut }   from 'svelte/easing';

    import { browser } from '$app/environment';


    let searchTerm              = '';
    let matchCount              = 0;
    let currentMatchIndex       = 0;
    let marks: HTMLElement[]    = [];
    let isExpanded              = false;


    function debounce(func: Function, wait: number) {
        let timeout: NodeJS.Timeout;

        return function executedFunction(...args: any[]) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }


    const escapeRegExp = ( string: string ) =>
        string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');


    function highlightText() {
        if (!browser || !searchTerm.trim()) {
            clearHighlights();
            matchCount = 0;
            currentMatchIndex = 0;
            return;
        }

        clearHighlights();

        const escapedSearchTerm = escapeRegExp(searchTerm);
        const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
        const elements = document.querySelectorAll('#linkstyle');

        elements.forEach(element => {
            const nodes = [];
            const walk = document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT, {
                    acceptNode: function(node) {
                        let parent = node.parentElement;
                        while (parent) {
                            if (parent.id === 'search-highlight') {
                                return NodeFilter.FILTER_REJECT;
                            }

                            parent = parent.parentElement;
                        }

                        return NodeFilter.FILTER_ACCEPT;
                    }
                }
            );

            let node;

            while ( node = walk.nextNode() ) {
                nodes.push( node );
            }

            nodes.forEach( textNode => {
                const text = textNode.textContent || '';

                if (!regex.test( text )) return;

                regex.lastIndex = 0;

                const fragments = [];
                let lastIndex = 0;
                let match;

                while (( match = regex.exec( text )) !== null) {
                    if ( match.index > lastIndex ) {
                        fragments.push( document.createTextNode( text.slice( lastIndex, match.index )));
                    }

                    const mark = document.createElement('span');
                    mark.id = 'search-highlight';
                    mark.className = 'search-highlight';
                    mark.textContent = match[0];
                    fragments.push(mark);

                    lastIndex = regex.lastIndex;
                }

                if ( lastIndex < text.length ) {
                    fragments.push(document.createTextNode( text.slice( lastIndex )));
                }

                if ( fragments.length > 0 ) {
                    const parent = textNode.parentNode;
                    if ( parent ) {
                        fragments.forEach( fragment => parent.insertBefore( fragment, textNode ));
                        parent.removeChild( textNode );
                    }
                }
            });
        });

        marks = Array
            .from( document.getElementsByClassName( 'search-highlight' ))
            .map( el => el as HTMLElement );
        matchCount = marks.length;
        currentMatchIndex = marks.length > 0 ? 1 : 0;

        if ( marks.length > 0 ) {
            marks[0].classList.add( 'active' );
            marks[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }


    function clearHighlights() {
        const highlights = document.getElementsByClassName( 'search-highlight' );

        while( highlights.length > 0 ) {
            const highlight = highlights[0];
            const parent = highlight.parentNode;

            if ( parent ) {
                parent.replaceChild( document.createTextNode( highlight.textContent || '' ), highlight );
                parent.normalize();
            }
        }
        marks = [];
    }


    const debouncedHighlight = debounce(highlightText, 150);


    function navigateMatches( direction: 'next' | 'prev' ) {
        if ( !browser || matchCount === 0 ) return;

        marks[currentMatchIndex - 1].classList.remove( 'active' );

        if ( direction === 'next' )
            currentMatchIndex = currentMatchIndex === matchCount ? 1 : currentMatchIndex + 1;
        else
            currentMatchIndex = currentMatchIndex === 1 ? matchCount : currentMatchIndex - 1;

        const currentMark = marks[currentMatchIndex - 1];
        currentMark.classList.add( 'active' );
        currentMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }


    function toggleSearch() {
        isExpanded = !isExpanded;

        if ( !isExpanded ) {
            searchTerm = '';
            clearHighlights();
        }
    }


    onMount(() => {
        if ( !browser ) return;

        return () => {
            clearHighlights();
        };
    });


    $: if ( browser && searchTerm !== undefined) debouncedHighlight();
</script>


{#if !isExpanded}
    <div
        class   = "fixed z-50 top-48     right-8"
        in:fly  = {{ x: 100, duration: 300, easing: cubicOut }}
        out:fly = {{ x: -100, duration: 300, easing: cubicOut }}
    >
        <button
            class="p-3 variant-glass-primary rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            on:click={toggleSearch}
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
{:else}
    <div 
        class   = "fixed z-50 top-48     right-8"
        in:fly  = {{ x: 400, duration: 400, easing: cubicOut }}
        out:fly = {{ x: 400, duration: 400, easing: cubicOut }}
    >
        <div class="flex flex-col gap-2 variant-glass-primary rounded-lg p-2 w-96 shadow-lg">
            <div class="flex items-center gap-2">
                <div class="relative flex-1">
                    <input
                        type        ="search"
                        bind:value={ searchTerm }
                        placeholder = "Buscar un link..."
                        class       = "p-2 pl-8 w-full input text-sm variant-ghost-primary"
                    />

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-2 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <button
                    class="p-2 rounded-full hover:bg-gray-100/20"
                    on:click={toggleSearch}
                    title="Cerrar búsqueda"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {#if matchCount > 0}
                <div class="flex items-center gap-2 justify-end" in:fade={{ duration: 200 }}>
                    <span class="text-sm">{currentMatchIndex} de {matchCount}</span>
                    <button
                        on:click={() => navigateMatches('prev')}
                        class="p-1.5 rounded hover:bg-gray-100/20"
                        title="Anterior coincidencia"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>

                    <button
                        on:click    = {() => navigateMatches( 'next' )}
                        class       = "p-1.5 rounded hover:bg-gray-100/20"
                        title       = "Siguiente coincidencia"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    :global(.search-highlight) {
        background-color    : rgb(245 158 11 / 0.5);
        border-radius       : 2px;
        transition          : all 0.2s ease;
        animation           : highlight-pulse 1s ease-out;
    }

    :global(.search-highlight.active) {
        background-color: rgb(245 158 11 / 0.8);
        outline         : 2px solid rgb(245 158 11);
        transform       : scale( 1.05 );
    }

    @keyframes highlight-pulse {
        0% {
            transform           : scale( 1 );
            background-color    : rgb(245 158 11 / 0.8);
        }
        50% {
            transform           : scale( 1.05 );
            background-color    : rgb(245 158 11 / 0.6);
        }
        100% {
            transform           : scale(1);
            background-color    : rgb( 245 158 11 / 0.5 );
        }
    }
</style>
