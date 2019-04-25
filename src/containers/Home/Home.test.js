import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router';
import Home from './index';

it('renders without crashing', () => {
  const component = render(
		<MemoryRouter>
			<Home />
		</MemoryRouter>
	)
	expect(component).toMatchSnapshot()
});
