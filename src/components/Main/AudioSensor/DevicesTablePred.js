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
import {dataForGraph} from "../GraphForPreview";

let idCounter = 0;

const MFS = 'Mass flow sensor';
const CTS = 'Coolant temperature sensor';
const KS = 'Knock sensor';

const MFS_PRED = 'PRED: Mass flow sensor';
const CTS_PRED = 'PRED: Coolant temperature sensor';
const KS_PRED = 'PRED: Knock sensor';

const name01 = "Out Pressure";
const name01_pred = "PREDICTION: Out Pressure";

const preparedData = () => dataForGraph.map((data) => ({
        id: idCounter++,
		time: data.t,
		date: "31.05.2019",
		name: name01_pred,
		data: data[name01],
		predData: data[name01_pred],
		precision: (1-(data[name01] / data[name01_pred])) * 100,
		note: "Normal condition. No sudden pressure drops expected.",
    })
);

const tableData = preparedData();

// const tableData = [
// 	{
// 		id: idCounter++,
// 		time: "-04.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 185,
// 		predData: 185 + 10,
// 		precision: (1-(185 / (185 + 10))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-04.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 185,
// 		predData: 185 - 12,
// 		precision: (1-(185 / (185 - 12))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-04.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 410,
// 		predData: 410 + 40,
// 		precision: (1-(410 / (410 + 40))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-03.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 853,
// 		predData:  853 + 43,
// 		precision: (1-(853 / (853 + 43))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-03.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 220,
// 		predData: 220 + 20,
// 		precision: (1-(220 / (220 + 20))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-03.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 530,
// 		predData: 530 - 41,
// 		precision: (1-(530 / (530 - 41))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-03.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 1372,
// 		predData: 1372 - 90,
// 		precision: (1-(1372 / (1372 - 90))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-03.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 330,
// 		predData:  330 - 21,
// 		precision: (1-(330 / (330 - 21))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-03.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 290,
// 		predData: 290 + 21,
// 		precision: (1-(290 / (290 + 21))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-02.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 1052,
// 		predData: 1052 + 115,
// 		precision: (1-(1052 / (1052 + 115))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-02.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 640,
// 		predData: 640 + 36,
// 		precision: (1-(640 / (640 + 36))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-02.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 240,
// 		predData: 240 + 2,
// 		precision: (1-(240 / (240 + 2))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-02.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 1013,
// 		predData: 1013 - 69,
// 		precision: (1-(1013 / (1013 - 69))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-02.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 420,
// 		predData: 420 - 14,
// 		precision: (1-(420 / (420 - 14))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-02.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 330,
// 		predData: 330 - 26,
// 		precision: (1-(330 / (330 - 26))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-01.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 854,
// 		predData: 854 + 61,
// 		precision: (1-(854 / (854 + 61))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-01.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 320,
// 		predData: 320 + 23,
// 		precision: (1-(320 / (320 + 23))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-01.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 160,
// 		predData: 160 + 6,
// 		precision: (1-(160 / (160 + 6))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-01.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 861,
// 		predData: 861,
// 		precision: (1-(861 / (861 + 0))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-01.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 250,
// 		predData: 250 + 3,
// 		precision: (1-(250 / (250 + 3))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-01.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 450,
// 		predData: 450 - 39,
// 		precision: (1-(450 / (450 - 39))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-00.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 2468,
// 		predData: 2468 - 196,
// 		precision: (1-(2468 / (2468 - 196))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-00.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 960,
// 		predData: 960 - 56,
// 		precision: (1-(960 / (960 - 56))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "-00.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 310,
// 		predData: 310 + 21,
// 		precision: (1-(310 / (310 + 21))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "00.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: 2230,
// 		predData: 2230 + 96,
// 		precision: (1-(2230 / (2230 + 96))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "00.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: 720,
// 		predData: 720 + 13,
// 		precision: (1-(720 / (720 + 13))) * 100,
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "00.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: 370,
// 		predData: 370 - 21,
// 		precision: (1-(370 / (370 - 21))) * 100,
// 		note: "Some note",
// 	},
//
//
//
//
// 	{
// 		id: idCounter++,
// 		time: "00.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 2230 + 96,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "00.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 720 + 13,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "00.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 370 - 21,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
//
// 	{
// 		id: idCounter++,
// 		time: "01.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 861,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "01.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 250 + 3,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "01.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 450 - 39,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
//
// 	{
// 		id: idCounter++,
// 		time: "01.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 854 + 61,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "01.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 320 + 23,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "01.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 160 + 6,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
//
// 	{
// 		id: idCounter++,
// 		time: "02.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 1013 - 69,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "02.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 420 - 14,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "02.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 330 - 26,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
//
// 	{
// 		id: idCounter++,
// 		time: "02.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 1052 + 115,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "02.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 640 + 36,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "02.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 240 + 2,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
//
// 	{
// 		id: idCounter++,
// 		time: "03.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 1372 - 90,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "03.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 330 - 21,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "03.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 290 + 21,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
//
// 	{
// 		id: idCounter++,
// 		time: "03.30",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 853 + 43,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "03.30",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 220 + 20,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "03.30",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 530 - 41,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
//
// 	{
// 		id: idCounter++,
// 		time: "04.00",
// 		date: "31.05.2019",
// 		name: MFS,
// 		data: "Unknown",
// 		predData: 685 + 10,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "04.00",
// 		date: "31.05.2019",
// 		name: CTS,
// 		data: "Unknown",
// 		predData: 415 - 12,
// 		precision: "---",
// 		note: "Some note",
// 	},
//
// 	{
// 		id: idCounter++,
// 		time: "04.00",
// 		date: "31.05.2019",
// 		name: KS,
// 		data: "Unknown",
// 		predData: 610 + 40,
// 		precision: "---",
// 		note: "Some note",
// 	},
// ];


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
    {id: 'predData', numeric: false, disablePadding: false, label: 'Predictive Data'},
    {id: 'precision', numeric: false, disablePadding: false, label: 'Precision, %'},
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
                    Out Pressure Sensor 01
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

export const DevicesTablePred = () => {
    const rows = [];

    tableData.map(d => rows.push(d));

    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('country');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    // const [dense, setDense] = React.useState(false);
    const [dense, setDense] = React.useState(true);
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
                                            <TableCell align="left">{row.predData}</TableCell>
                                            <TableCell align="left">{row.precision}</TableCell>
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