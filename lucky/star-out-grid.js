function starOutGrid(grid) {
        const width = grid[0].length;
        const columns = Array(width).fill(false);
      
        grid.forEach(row => {
          row.forEach((column, i) => {
            if (column === '*') {
              columns[i] = true;
            }
          });
      
          if (row.includes('*')) {
            for (let i = 0; i < width; i++) {
              row[i] = '*';
            }
          }
        });
      
        columns.forEach((column, i) => {
          if (column) {
            grid.forEach(row => {
              row[i] = '*';
            });
          }
        });
      
        return grid;
    };
