import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('render button component', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('render with clear theme', () => {
        render(<Button theme="clear">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
