const specializations = {
    'kabulUniversity': {
        'economics': ['Accounting', 'Banking'],
        'law': ['Judiciary and Prosecution', 'International Relations'],
        'psychology': ['General Psychology', 'Family and Population Psychology']
    },
    'kabulPolytechnicUniversity': {
        'civilEngineering': ['Water Supply', 'Hydraulics'],
        'computerScience': ['Web Development', 'IT'],
        'geologyAndMining': ['Underground Mining Engineering', 'Oil and Gas']
    },
    'kabulMedicalUniversity': {
        'medicine': ['Medicine'],
        'stomatology': ['Stomatology'],
        'nursing': ['Nursing']
    }
};

const departments = {
    'kabulUniversity': ['economics', 'law', 'psychology'],
    'kabulPolytechnicUniversity': ['civilEngineering', 'computerScience', 'geologyAndMining'],
    'kabulMedicalUniversity': ['medicine', 'stomatology', 'nursing']
};

const students = {
    'Accounting': [
        { id: 1, name: 'Helan Rahimi', email: 'helan123@example.com' },
        { id: 2, name: 'Rafi Ahmadi', email: 'ahmadi123@example.com' }
    ],
    'Banking': [
        { id: 3, name: 'Omar Rahimi', email: 'omar123@example.com' },
        { id: 4, name: 'Friba Kohistani', email: 'friba123@example.com' }
    ],
    'Judiciary and Prosecution': [
        { id: 5, name: 'Sodaba Saim', email: 'sodaba123@example.com' },
        { id: 6, name: 'Awid Saleh', email: 'awid123@example.com' }
    ],
    'International Relations': [
        { id: 7, name: 'Sara Rahin', email: 'sara123@example.com' }
    ],
    'General Psychology': [
        { id: 8, name: 'Sehar Faizi', email: 'sehar123@example.com' },
        { id: 9, name: 'Sadaf Ahmadi', email: 'sadaf123@example.com' },
        { id: 10, name: 'Samira Ahmadi', email: 'samira123@example.com' }
    ],
    'Family and Population Psychology': [
        { id: 11, name: 'Zeenat Kohistani', email: 'zeenat123@example.com' }
    ],
    'Water Supply': [
        { id: 12, name: 'Samim Saim', email: 'samim123@example.com' },
        { id: 13, name: 'Bilal Azim', email: 'bilal123@example.com' }
    ],
    'Hydraulics': [
        { id: 14, name: 'Abdullah Ahmadi' },
        { id: 15, name: 'Naim Rahimi', email: 'naim123@example.com' },
        { id: 16, name: 'Sepahr Kohistani', email: 'sepahr123@example.com' }
    ],
    'IT': [
        { id: 17, name: 'Elaha Noori', email: 'elaha123@example.com' },
        { id: 18, name: 'Parndosh Azimi', email: 'parndosh123@example.com' }
    ],
    'Web Development': [
        { id: 19, name: 'Hela Rahimi', email: 'hela123@example.com' },
        { id: 20, name: 'Sosan Saifi', email: 'sosan123@example.com' }
    ],
    'Underground Mining Engineering': [
        { id: 21, name: 'Dina Noori', email: 'dina123@example.com' }
    ],
    'Oil and Gas': [
        { id: 22, name: 'Fatima Rizai', email: 'fatima123@example.com' }
    ],
    'Medicine': [
        { id: 23, name: 'Lima Azizi', email: 'lima123@example.com' },
        { id: 24, name: 'Shabnam Jan', email: 'jan123@gmail.com' }
    ],
    'Stomatology': [
        { id: 25, name: 'Nazo Kabir', email: 'nazo123@example.com' }
    ],
    'Nursing': [
        { id: 26, name: 'Elyas Saleh', email: 'elyas123@example.com' }
    ]
};

document.getElementById('university').addEventListener('change', function() {
    const university = this.value;
    const departmentSelect = document.getElementById('department');
    departmentSelect.innerHTML = '';

    if (university) {
        departments[university].forEach(department => {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department.charAt(0).toUpperCase() + department.slice(1).replace(/([A-Z])/g, ' $1');
            departmentSelect.appendChild(option);
        });
    }
});

document.getElementById('department').addEventListener('change', function() {
    const university = document.getElementById('university').value;
    const department = this.value;
    const specializationSelect = document.getElementById('specialization');
    specializationSelect.innerHTML = '';

    if (university && department) {
        specializations[university][department].forEach(specialization => {
            const option = document.createElement('option');
            option.value = specialization;
            option.textContent = specialization;
            specializationSelect.appendChild(option);
        });
    }
});

document.getElementById('selectionForm').addEventListener('change', function() {
    const university = document.getElementById('university').value;
    const department = document.getElementById('department').value;
    const specialization = document.getElementById('specialization').value;
    const studentsInfo = document.getElementById('studentsInfo').querySelector('tbody');
    studentsInfo.innerHTML = '';

    if (university && department && specialization) {
        if (students[specialization]) {
            students[specialization].forEach(student => {
                const row = document.createElement('tr');
                const idCell = document.createElement('td');
                const nameCell = document.createElement('td');
                const emailCell = document.createElement('td');
                idCell.textContent = student.id;
                nameCell.textContent = student.name;
                emailCell.textContent = student.email;
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(emailCell);
                studentsInfo.appendChild(row);
            });
        }
    }
});
