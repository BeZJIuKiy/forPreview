import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import {useSelector} from "react-redux";

let idCounter = 0;

const MFS = 'Mass flow sensor';
const CTS = 'Coolant temperature sensor';
const KS = 'Knock sensor';


const tableData = [
	{
		id: idCounter++,
		time: "00.00",
		date: "31.05.2019",
		name: MFS,
		data: 661,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "00.00",
		date: "31.05.2019",
		name: CTS,
		data: 390,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "00.00",
		date: "31.05.2019",
		name: KS,
		data: 640,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "00.30",
		date: "31.05.2019",
		name: MFS,
		data: 685,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "00.30",
		date: "31.05.2019",
		name: CTS,
		data: 415,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "00.30",
		date: "31.05.2019",
		name: KS,
		data: 610,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "01.00",
		date: "31.05.2019",
		name: MFS,
		data: 853,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "01.00",
		date: "31.05.2019",
		name: CTS,
		data: 220,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "01.00",
		date: "31.05.2019",
		name: KS,
		data: 530,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "01.30",
		date: "31.05.2019",
		name: MFS,
		data: 1372,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "01.30",
		date: "31.05.2019",
		name: CTS,
		data: 330,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "01.30",
		date: "31.05.2019",
		name: KS,
		data: 290,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "02.00",
		date: "31.05.2019",
		name: MFS,
		data: 1052,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "02.00",
		date: "31.05.2019",
		name: CTS,
		data: 640,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "02.00",
		date: "31.05.2019",
		name: KS,
		data: 240,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "02.30",
		date: "31.05.2019",
		name: MFS,
		data: 1013,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "02.30",
		date: "31.05.2019",
		name: CTS,
		data: 420,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "02.30",
		date: "31.05.2019",
		name: KS,
		data: 330,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "03.00",
		date: "31.05.2019",
		name: MFS,
		data: 854,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "03.00",
		date: "31.05.2019",
		name: CTS,
		data: 320,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "03.00",
		date: "31.05.2019",
		name: KS,
		data: 160,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "03.30",
		date: "31.05.2019",
		name: MFS,
		data: 861,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "03.30",
		date: "31.05.2019",
		name: CTS,
		data: 250,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "03.30",
		date: "31.05.2019",
		name: KS,
		data: 450,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "04.00",
		date: "31.05.2019",
		name: MFS,
		data: 2468,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "04.00",
		date: "31.05.2019",
		name: CTS,
		data: 960,
		note: "Some note",
	},

	{
		id: idCounter++,
		time: "04.00",
		date: "31.05.2019",
		name: KS,
		data: 310,
		note: "Some note",
	},
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{id: 'time', numeric: false, disablePadding: true, label: ' Time'},
	{id: 'date', numeric: false, disablePadding: true, label: ' Date'},
	{id: 'name', numeric: false, disablePadding: false, label: 'Sensor name'},
	{id: 'data', numeric: false, disablePadding: false, label: 'Data'},
	{id: 'note', numeric: false, disablePadding: false, label: 'Note'},

];

function EnhancedTableHead(props) {
	const {classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{'aria-label': 'select all desserts'}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight:
		theme.palette.type === 'light'
			? {
				color: theme.palette.secondary.main,
				backgroundColor: lighten(theme.palette.secondary.light, 0.85),
			}
			: {
				color: theme.palette.text.primary,
				backgroundColor: theme.palette.secondary.dark,
			},
	title: {
		flex: '1 1 100%',
	},
	editIcons: {
		display: 'flex'
	},
}));

const EnhancedTableToolbar = (props) => {
	const classes = useToolbarStyles();
	const {numSelected} = props;

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			{numSelected > 0 ? (
				<Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
					{numSelected} selected
				</Typography>
			) : (
				<Typography className={classes.title} variant="h6" id="tableTitle" component="div">
					{/* Events - это заголовок таблицы */}
					Cameras
				</Typography>
			)}

			{numSelected === 1 ? (
				<Tooltip
					title="Change current camera"
					onClick={() => alert("Change current camera")}
				>
					<IconButton aria-label="Change current camera">
						<EditIcon color="primary"/>
					</IconButton>
				</Tooltip>
			) : ('')
			}

			{numSelected >= 1 ? (
				<Tooltip
					title="Delete"
					onClick={() => alert("Delete")}
				>
					<IconButton aria-label="delete">
						<DeleteIcon/>
					</IconButton>
				</Tooltip>
			) : (
				<div className={classes.editIcons}>
					<Tooltip
						title="Change all cameras"
						onClick={() => alert("Change all cameras")}
					>
						<IconButton aria-label="Change all cameras">
							<EditIcon color="primary"/>
						</IconButton>
					</Tooltip>

					<Tooltip
						title="Add ship"
						onClick={() => alert("Add camera")}
					>
						{/* <IconButton aria-label="filter list"> */}
						<IconButton aria-label="Add ship">
							{/* <FilterListIcon /> - это фильтр */}
							<AddCircleIcon color="secondary"/>
						</IconButton>
					</Tooltip>
				</div>
			)}
		</Toolbar>
	);
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 500,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

export const DevicesTable = () => {
	const rows = [];

	tableData.map(d => rows.push(d))
	console.log(rows)


	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('country');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.id);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, id) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event) => {
		setDense(event.target.checked);
	};

	const isSelected = (id) => selected.indexOf(id) !== -1;

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<EnhancedTableToolbar numSelected={selected.length}/>
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size={dense ? 'small' : 'medium'}
						aria-label="enhanced table"
					>
						<EnhancedTableHead
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{stableSort(rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.id);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row.id)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.id}
											selected={isItemSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{'aria-labelledby': labelId}}
												/>
											</TableCell>
											{/* <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.typeError} */}

											<TableCell align="left">{row.time}</TableCell>
											<TableCell align="left">{row.date}</TableCell>
											<TableCell align="left">{row.name}</TableCell>
											<TableCell align="left">{row.data}</TableCell>
											<TableCell align="left">{row.note}</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>
									<TableCell colSpan={6}/>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}