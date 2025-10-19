document.addEventListener('DOMContentLoaded', () => {
  const expenseForm = document.getElementById('expenseForm');
  const expenseTable = document.getElementById('expenseTable').querySelector('tbody');
  const ctx = document.getElementById('expenseChart').getContext('2d');
  let expenseChart;

  // Initialize Chart
  function initChart(data) {
    const categories = [...new Set(data.map(item => item.category))];
    const amounts = categories.map(cat => 
      data.filter(item => item.category === cat).reduce((sum, item) => sum + item.amount, 0)
    );

    if (expenseChart) expenseChart.destroy();
    expenseChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [{
          data: amounts,
          backgroundColor: [
              // Primary Colors
              '#FF6384', // Red-Pink
              '#36A2EB', // Blue
              '#FFCE56', // Yellow
              '#4BC0C0', // Teal
              '#9966FF', // Purple
              '#FF9F40', // Orange
              
              // Additional Colors
              '#FF6384', // Red-Pink
              '#C9CBCF', // Gray
              '#4BC0C0', // Teal
              '#FF6384', // Red-Pink
              '#36A2EB', // Blue
              '#FFCE56', // Yellow
              '#9966FF', // Purple
              '#FF9F40', // Orange
              '#C9CBCF', // Gray
              
              // Extended Palette
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
              '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#FF6384',
              '#36A2EB', '#FFCE56', '#9966FF', '#FF9F40', '#C9CBCF'
          ]
        }]
      }
    });
  }

  // Fetch and render expenses
  async function fetchExpenses() {
    const response = await fetch('/expenses');
    const data = await response.json();
    renderExpenses(data);
    initChart(data);
  }

  // Render expenses table
  function renderExpenses(expenses) {
    expenseTable.innerHTML = '';
    expenses.forEach(expense => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${expense.category}</td>
        <td>₹${expense.amount.toFixed(2)}</td>
        <td>${new Date(expense.date).toLocaleDateString()}</td>
        <td><button class="delete-btn" data-id="${expense.id}">Delete</button></td>
      `;
      expenseTable.appendChild(row);
    });

    // Add delete event listeners
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        await fetch(`/expense/${e.target.dataset.id}`, { method: 'DELETE' });
        fetchExpenses();
      });
    });
  }

  // Add new expense
  expenseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const expense = {
      category: document.getElementById('category').value,
      amount: parseFloat(document.getElementById('amount').value),
      date: document.getElementById('date').value
    };

    await fetch('/expense', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense)
    });

    expenseForm.reset();
    fetchExpenses();
  });

  // Initial load
  fetchExpenses();
});