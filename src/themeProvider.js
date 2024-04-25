import { ref, readonly } from 'vue';

const theme = ref('light'); // default theme

export function useTheme() {
    const setTheme = (newTheme) => {
        theme.value = newTheme;
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    
    setTheme(theme.value);

    return {

        

        theme: readonly(theme),
        setTheme
    };
}
