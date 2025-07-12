const token = 'dh2qoqbpfoorvgau55ohmg6vc6n87o9df6e6didiijm669f4c1i';
const baseUrl = 'https://prologapp.com/prolog/vehicles';
const tableBody = document.getElementById('vehicle-table');

fetch(`${baseUrl}?branchOfficesId=215&pageSize=100&pageNumber=0`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    data.content.forEach(vehicle => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${vehicle.id}</td>
        <td>${vehicle.branchOfficeId}</td>
        <td>${vehicle.plate}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(err => console.error('Error al cargar vehículos:', err));