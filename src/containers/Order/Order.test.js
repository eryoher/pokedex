import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router';
import Order from './index';

it('renders without crashing', () => {
  const component = render(
		<MemoryRouter>
			<Order />
		</MemoryRouter>
	)
	expect(component).toMatchSnapshot()
});
