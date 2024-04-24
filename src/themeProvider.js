import { ref, readonly } from 'vue';

const theme = ref('light'); // default theme

export function useTheme() {
    const setTheme = (newTheme) => {
        theme.value = newTheme;
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return {
        theme: readonly(theme),
        setTheme
    };
}
