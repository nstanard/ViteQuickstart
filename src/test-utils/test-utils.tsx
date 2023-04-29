import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import Providers from 'src/providers';

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { customRender as render };
