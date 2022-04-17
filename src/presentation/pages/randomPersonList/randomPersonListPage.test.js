import React from 'react';
import RandomPersonListPage from '.';
import { fireEvent, render, screen, waitFor } from '../../utils/testUtils';

describe("test RandomPersonListPage", () => {
  test("should loading appears on page load", async () => {
    render(<RandomPersonListPage />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test('should loading appears on click to load more random person', 
    async () => { 
      render(<RandomPersonListPage />);
      
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
    render(<RandomPersonListPage />);
    
    await waitFor(
      () => screen.getByRole("button"), 
      { timeout: 5000},
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(10);
  });

  test('should list twenty random person on click button', 
    async () => { 
      render(<RandomPersonListPage />);
      
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
