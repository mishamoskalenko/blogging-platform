import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('render button component', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('render with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
