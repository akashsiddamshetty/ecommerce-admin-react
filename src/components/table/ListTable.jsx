import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListTable = () => {
  const rows = [
    {
      id: 4145352,
      product: "Accer Nitro 5",
      img: "https://m.media-amazon.com/images/I/71evs2WKJjS._SL1500_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 9898789,
      product: "Playstation 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8cKYm8ol4wndNJCtW4I-cG5JDIrz6WqnEeJwTngo4o6sASWjttRoo_E0pUJ_oDW1wOk&usqp=CAU",
      customer: "John Smith",
      date: "10 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 41496987,
      product: "Redragon S101",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdIN3VZzwrfONkjpMJUkz3fqApCpGcGikvQ&usqp=CAU",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 418789789,
      product: "Razer Blade 15",
      img: "data:image/jpeg;base64,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",
      customer: "John Smith",
      date: "7 March",
      amount: 920,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 4145389792,
      product: "ASUS ROG Strik",
      img: "data:image/jpeg;base64,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",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online Payment",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="listTable">
      <Table sx={{ minWidth: 650 }} aria-label="simpletable">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="product" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
