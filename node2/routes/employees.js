import express from 'express';

const router = express.Router();

const users = [
    {
        employeeId:1254341,
        name:"Thing 1",
        salary: 85000,
        departmentName: "IT"
    },
    {
        employeeId:12234341,
        name:"Thing 2",
        salary: 85500,
        departmentName: "sales"
    },
    {
        employeeId:1287341,
        name:"Thing 3",
        salary: 95000,
        departmentName: "IT"
    },
    {
        employeeId:13242341,
        name:"Thing 4",
        salary: 83000,
        departmentName: "HR"
    },
    {
        employeeId:1268341,
        name:"Thing 5",
        salary: 75000,
        departmentName: "HR"
    },
    {
        employeeId:1862341,
        name:"Thing 6",
        salary: 84000,
        departmentName: "IT"
    },
    {
        employeeId:12354641,
        name:"Thing 7",
        salary: 45000,
        departmentName: "sales"
    },
    {
        employeeId:1234431,
        name:"Thing 8",
        salary: 55000,
        departmentName: "customer support"
    },
    {
        employeeId:123123,
        name:"Thing 9",
        salary: 67000,
        departmentName: "sales"
    },
    {
        employeeId:123464,
        name:"Thing 10",
        salary: 185000,
        departmentName: "hardware"
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

   const foundUser =  users.find((user) => user.employeeId == id);

    res.send(foundUser);
});

export default router;