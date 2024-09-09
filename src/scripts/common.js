import { onMounted } from 'vue';

function useFadeIn() {
    onMounted(() => {
        const elements = document.querySelectorAll('.fade-in');
        const handleScroll = () => {
            elements.forEach((element) => {
                if (element.getBoundingClientRect().top + 20 < window.innerHeight) {
                    element.classList.add('active');
                }
            });
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
}

export {useFadeIn};