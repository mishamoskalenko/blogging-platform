import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render Sidebar component', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toogle', () => {
        componentRender(<Sidebar />);
        const toogleButton = screen.getByTestId('sidebar-toogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
