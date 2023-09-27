import React from 'react';
import {render, screen} from '@testing-library/react';
import Plans from './Plans';

it('renders without crashing', () => {
    render(<Plans />)
    expect(screen.getByText('Plans')).toBeInTheDocument()
})        