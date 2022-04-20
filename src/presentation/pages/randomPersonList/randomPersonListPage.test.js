import React from 'react';
import RandomPersonListPage from '.';
import { createRoute, createRoutes, fireEvent, render, screen, waitFor } from '../../utils/testUtils';

const testElement = createRoutes([
  createRoute(<RandomPersonListPage />),
]);

describe("test RandomPersonListPage", () => {
  test("should loading appears on page load", async () => {
    render(testElement);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test('should loading appears on click to load more random person', 
    async () => { 
      render(testElement);
      
      const button = await waitFor(
        () => screen.getByRole("button"), 
        { timeout: 5000},
      );
      
      expect(button).toBeEnabled();
      fireEvent.click(button);

      expect(await screen.findByRole("progressbar")).toBeInTheDocument();
    }
  );

  test("should list ten random person on load page", async () => {
    render(testElement);
    
    await waitFor(
      () => screen.getByRole("button"), 
      { timeout: 5000},
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(10);
  });

  test('should list twenty random person on click button', 
    async () => { 
      render(testElement);
      
      const button = await waitFor(
        () => screen.getByRole("button"), 
        { timeout: 5000},
      );
      
      expect(button).toBeEnabled();
      fireEvent.click(button);

      await waitFor(
        () => screen.getByRole("button"), 
        { timeout: 5000},
      );

      expect(screen.getAllByRole("listitem")).toHaveLength(20);
    }
  );
});
