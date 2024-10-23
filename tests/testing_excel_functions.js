// Sample data to mimic your Excel data structure
const sampleData = [
    ['Projekt', 'Ticketnummer', 'Datum', 'Projektticket', 'Mitarbeiter', 'Gebucht (in PT)', 'Fakturierbar (in PT)', 'Firma', 'Abrechnungsstatus', 'Abrechenbar', '', '', '', ''],
    ['Projekt1', '12345', '2024-01-01', 'Task1', 'Maximilian Lindner', '1.0', '1.0', 'Company A', 'status', 'yes'],
    ['Projekt2', '67890', '2024-01-02', 'Task2', 'John Doe', '2.0', '2.0', 'Company B', 'status', 'no']
  ];
  
  // Define the helper functions object
  const helperFunctions = {
    findIndexByName: (headers, columnName) => headers.indexOf(columnName),
  };
  
  // Define the executeFormula function
  async function executeFormula(entry, data, employeeName, helperFunctions = {}) {
    try {
      console.log("Helper Functions inside executeFormula:", helperFunctions);
  
      // Use the formula from the entry
      const formula = `
        ${entry.formula}
      `;
  
      // Convert formula string to a function that also includes the helper functions
      const formulaFunction = new Function("data", "employeeName", "helpers", formula);
  
      // Execute the formula with the data, employeeName, and helperFunctions object
      return formulaFunction(data, employeeName, helperFunctions);
    } catch (error) {
      console.error("Error executing formula: ", error);
    }
  }
  
  // Define a simple test formula entry
  const testEntry = {
    formula: `
      const headers = data[0];
      const mitarbeiterColumnIndex = helpers.findIndexByName(headers, "Mitarbeiter");
      return mitarbeiterColumnIndex;
    `
  };
  
  // Run the test
  async function runTest() {
    const result = await executeFormula(testEntry, sampleData, "Maximilian Lindner", helperFunctions);
    console.log("Test result:", result); // Should log the index of the "Mitarbeiter" column (which should be 4)
  }
  
  // Execute the test
  runTest();
  