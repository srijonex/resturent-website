function openSeatingPopup() {
  document.getElementById('seatingPopup').style.display = 'flex';
}

function closeSeatingPopup() {
  document.getElementById('seatingPopup').style.display = 'none';
}

function selectTable(el) {
  document.querySelectorAll('.table').forEach(table => {
    table.classList.remove('selected');
  });
  el.classList.add('selected');
}

function confirmSeating() {
  const selectedTable = document.querySelector('.table.selected');
  if (selectedTable) {
    alert(`You selected ${selectedTable.textContent}`);
    closeSeatingPopup();
  } else {
    alert('Please select a table.');
  }
}

function checkOpenStatus() {
  const now = new Date();
  const hour = now.getHours();
  const status = (hour >= 9 && hour < 22) ? "🟢 We are open!" : "🔴 Sorry, we're closed.";
  document.getElementById('openStatus').textContent = status;
}
checkOpenStatus();

