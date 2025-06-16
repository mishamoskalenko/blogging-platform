import { memo } from 'react';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    return (
        <Icon Svg={ThemeIcon} width={40} height={40} onClick={toggleTheme} clickable />
    );
});
