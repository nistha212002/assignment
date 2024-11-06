export default function json2html(data) {
    // Start the table with the data-user attribute
    let html = `<table data-user="nisthasinghindore@gmail.com">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>`;
    
    // Loop through each object in the data array to create table rows
    data.forEach(item => {
        html += `<tr>
                    <td>${item.Name || ""}</td>
                    <td>${item.Age || ""}</td>
                    <td>${item.Gender || ""}</td>
                 </tr>`;
    });

    // Close the table
    html += `   </tbody>
               </table>`;
    
    return html;
}