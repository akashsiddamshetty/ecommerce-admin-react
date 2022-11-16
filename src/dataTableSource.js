
export const userColums = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 100 },
    {
        field: 'status', headerName: 'Status', width: 160, renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },

]



export const userRows = [
    {
        id: 1,
        username: 'Jon Snow',
        img: 'https://pyxis.nymag.com/v1/imgs/7ad/fa0/4eb41a9408fb016d6eed17b1ffd1c4d515-07-jon-snow.rsquare.w330.jpg',
        status: 'active',
        email: 'jonsnow@gmail.com',
        age: 35
    },
    {
        id: 2,
        username: 'Jamie Lannister',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg/170px-Nikolaj_Coster-Waldau_by_Gage_Skidmore.jpg',
        status: 'passive',
        email: 'jamie@gmail.com',
        age: 42
    }, {
        id: 3,
        username: 'Tyrion Lannister',
        img: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-1920.jpg?w=1200',
        status: 'active',
        email: 'tyrion@gmail.com',
        age: 38
    }, {
        id: 4,
        username: 'Catelyn stark',
        img: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/catelyn-stark-1920.jpg?w=1200',
        status: 'pending',
        email: 'catelyn@gmail.com',
        age: 50
    }, {
        id: 5,
        username: 'Arya stark',
        img: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/arya-stark-1920.jpg?w=1200',
        status: 'active',
        email: 'arya@gmail.com',
        age: 16
    }, {
        id: 6,
        username: 'Jorah Mormont',
        img: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jorah-mormont-1920.jpg?w=1200',
        status: 'active',
        email: 'jorah@gmail.com',
        age: 40
    }
]