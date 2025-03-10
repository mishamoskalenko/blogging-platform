import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('render Sidebar component', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toogle', () => {
        renderWithTranslation(<Sidebar />);
        const toogleButton = screen.getByTestId('sidebar-toogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
