import React, {useState} from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Text} from 'recharts';


const name01 = "Out Pressure";
const name01_pred = "PREDICTION: Out Pressure";

export const dataForAudioGraph = [
    {t: "-04:00", [name01]: 219, [name01_pred]: 218.4},
    {t: "-03:59", [name01]: 217, [name01_pred]: 218.4},
    {t: "-03:58", [name01]: 217, [name01_pred]: 216.9},
    {t: "-03:57", [name01]: 218, [name01_pred]: 216.9},
    {t: "-03:56", [name01]: 218, [name01_pred]: 219.2},
    {t: "-03:55", [name01]: 216, [name01_pred]: 219.2},
    {t: "-03:54", [name01]: 216, [name01_pred]: 217.6},
    {t: "-03:53", [name01]: 215, [name01_pred]: 217.6},
    {t: "-03:52", [name01]: 215, [name01_pred]: 218.2},
    {t: "-03:51", [name01]: 216, [name01_pred]: 218.2},
    {t: "-03:50", [name01]: 216, [name01_pred]: 218.5},
    {t: "-03:49", [name01]: 217, [name01_pred]: 218.5},
    {t: "-03:48", [name01]: 217, [name01_pred]: 217.9},
    {t: "-03:47", [name01]: 217, [name01_pred]: 217.9},
    {t: "-03:46", [name01]: 216, [name01_pred]: 218.1},
    {t: "-03:45", [name01]: 216, [name01_pred]: 218.1},
    {t: "-03:44", [name01]: 217, [name01_pred]: 217.3},
    {t: "-03:43", [name01]: 217, [name01_pred]: 217.3},
    {t: "-03:42", [name01]: 217, [name01_pred]: 216.9},
    {t: "-03:41", [name01]: 217, [name01_pred]: 216.9},
    {t: "-03:40", [name01]: 217, [name01_pred]: 217.5},
    {t: "-03:39", [name01]: 217, [name01_pred]: 217.5},
    {t: "-03:38", [name01]: 216, [name01_pred]: 218.5},
    {t: "-03:37", [name01]: 216, [name01_pred]: 218.5},
    {t: "-03:36", [name01]: 220, [name01_pred]: 217.3},
    {t: "-03:35", [name01]: 220, [name01_pred]: 217.3},
    {t: "-03:34", [name01]: 218, [name01_pred]: 218.4},
    {t: "-03:33", [name01]: 218, [name01_pred]: 218.4},
    {t: "-03:32", [name01]: 218, [name01_pred]: 217.1},
    {t: "-03:31", [name01]: 218, [name01_pred]: 217.1},
    {t: "-03:30", [name01]: 217, [name01_pred]: 216.9},
    {t: "-03:29", [name01]: 217, [name01_pred]: 216.9},
    {t: "-03:28", [name01]: 217, [name01_pred]: 218.5},
    {t: "-03:27", [name01]: 218, [name01_pred]: 218.5},
    {t: "-03:26", [name01]: 218, [name01_pred]: 218.1},
    {t: "-03:25", [name01]: 217, [name01_pred]: 218.1},
    {t: "-03:24", [name01]: 217, [name01_pred]: 219.5},
    {t: "-03:23", [name01]: 216, [name01_pred]: 219.5},
    {t: "-03:22", [name01]: 216, [name01_pred]: 217.8},
    {t: "-03:21", [name01]: 218, [name01_pred]: 217.8},
    {t: "-03:20", [name01]: 218, [name01_pred]: 219.5},
    {t: "-03:19", [name01]: 217, [name01_pred]: 219.5},
    {t: "-03:18", [name01]: 217, [name01_pred]: 218.5},
    {t: "-03:17", [name01]: 216, [name01_pred]: 218.5},
    {t: "-03:16", [name01]: 216, [name01_pred]: 218.6},
    {t: "-03:15", [name01]: 216, [name01_pred]: 218.6},
    {t: "-03:14", [name01]: 216, [name01_pred]: 218.1},
    {t: "-03:13", [name01]: 216, [name01_pred]: 218.1},
    {t: "-03:12", [name01]: 216, [name01_pred]: 217.6},
    {t: "-03:11", [name01]: 217, [name01_pred]: 217.6},
    {t: "-03:10", [name01]: 217, [name01_pred]: 219.1},
    {t: "-03:09", [name01]: 215, [name01_pred]: 219.1},
    {t: "-03:08", [name01]: 215, [name01_pred]: 217},
    {t: "-03:07", [name01]: 217, [name01_pred]: 217},
    {t: "-03:06", [name01]: 217, [name01_pred]: 217.2},
    {t: "-03:05", [name01]: 217, [name01_pred]: 217.2},
    {t: "-03:04", [name01]: 225, [name01_pred]: 216.7},
    {t: "-03:03", [name01]: 225, [name01_pred]: 216.7},
    {t: "-03:02", [name01]: 224, [name01_pred]: 216.4},
    {t: "-03:01", [name01]: 224, [name01_pred]: 216.4},
    {t: "-03:00", [name01]: 221, [name01_pred]: 218.3},
    {t: "-02:59", [name01]: 221, [name01_pred]: 218.3},
    {t: "-02:58", [name01]: 217, [name01_pred]: 217.5},
    {t: "-02:57", [name01]: 217, [name01_pred]: 217.5},
    {t: "-02:56", [name01]: 215, [name01_pred]: 215.5},
    {t: "-02:55", [name01]: 215, [name01_pred]: 215.5},
    {t: "-02:54", [name01]: 216, [name01_pred]: 215.5},
    {t: "-02:53", [name01]: 216, [name01_pred]: 215.5},
    {t: "-02:52", [name01]: 215, [name01_pred]: 214.3},
    {t: "-02:51", [name01]: 215, [name01_pred]: 214.3},
    {t: "-02:50", [name01]: 218, [name01_pred]: 216.2},
    {t: "-02:49", [name01]: 218, [name01_pred]: 216.2},
    {t: "-02:48", [name01]: 218, [name01_pred]: 216.1},
    {t: "-02:47", [name01]: 218, [name01_pred]: 216.1},
    {t: "-02:46", [name01]: 218, [name01_pred]: 214.5},
    {t: "-02:45", [name01]: 216, [name01_pred]: 214.5},
    {t: "-02:44", [name01]: 216, [name01_pred]: 215.8},
    {t: "-02:43", [name01]: 216, [name01_pred]: 215.8},
    {t: "-02:42", [name01]: 216, [name01_pred]: 215.2},
    {t: "-02:41", [name01]: 215, [name01_pred]: 215.2},
    {t: "-02:40", [name01]: 215, [name01_pred]: 215.9},
    {t: "-02:39", [name01]: 217, [name01_pred]: 215.9},
    {t: "-02:38", [name01]: 217, [name01_pred]: 214.3},
    {t: "-02:37", [name01]: 216, [name01_pred]: 214.3},
    {t: "-02:36", [name01]: 216, [name01_pred]: 213.1},
    {t: "-02:35", [name01]: 214, [name01_pred]: 213.1},
    {t: "-02:34", [name01]: 214, [name01_pred]: 214},
    {t: "-02:33", [name01]: 214, [name01_pred]: 214},
    {t: "-02:32", [name01]: 214, [name01_pred]: 216.2},
    {t: "-02:31", [name01]: 221, [name01_pred]: 216.2},
    {t: "-02:30", [name01]: 221, [name01_pred]: 212.8},
    {t: "-02:29", [name01]: 225, [name01_pred]: 212.8},
    {t: "-02:27", [name01]: 225, [name01_pred]: 213.9},
    {t: "-02:25", [name01]: 225, [name01_pred]: 214},
    {t: "-02:23", [name01]: 224, [name01_pred]: 213.4},
    {t: "-02:21", [name01]: 221, [name01_pred]: 215.3},
    {t: "-02:19", [name01]: 217, [name01_pred]: 211.1},
    {t: "-02:17", [name01]: 220, [name01_pred]: 214.2},
    {t: "-02:15", [name01]: 222, [name01_pred]: 212.7},
    {t: "-02:13", [name01]: 220, [name01_pred]: 212.7},
    {t: "-02:11", [name01]: 217, [name01_pred]: 213.5},
    {t: "-02:09", [name01]: 216, [name01_pred]: 210.4},
    {t: "-02:07", [name01]: 219, [name01_pred]: 216.1},
    {t: "-02:05", [name01]: 220, [name01_pred]: 212.7},
    {t: "-02:04", [name01]: 220, [name01_pred]: 214.4},
    {t: "-02:03", [name01]: 218, [name01_pred]: 214.4},
    {t: "-02:02", [name01]: 218, [name01_pred]: 213.6},
    {t: "-02:01", [name01]: 219, [name01_pred]: 213.6},
    {t: "-02:00", [name01]: 219, [name01_pred]: 213.4},
    {t: "-01:59", [name01]: 218, [name01_pred]: 213.4},
    {t: "-01:58", [name01]: 218, [name01_pred]: 216.7},
    {t: "-01:57", [name01]: 217, [name01_pred]: 216.7},
    {t: "-01:56", [name01]: 217, [name01_pred]: 214.9},
    {t: "-01:55", [name01]: 218, [name01_pred]: 214.9},
    {t: "-01:54", [name01]: 218, [name01_pred]: 213.4},
    {t: "-01:53", [name01]: 222, [name01_pred]: 213.4},
    {t: "-01:52", [name01]: 222, [name01_pred]: 215.1},
    {t: "-01:51", [name01]: 224, [name01_pred]: 215.1},
    {t: "-01:50", [name01]: 224, [name01_pred]: 212.4},
    {t: "-01:49", [name01]: 219, [name01_pred]: 212.4},
    {t: "-01:48", [name01]: 219, [name01_pred]: 214.3},
    {t: "-01:47", [name01]: 215, [name01_pred]: 214.3},
    {t: "-01:45", [name01]: 215, [name01_pred]: 213.2},
    {t: "-01:43", [name01]: 216, [name01_pred]: 212.6},
    {t: "-01:41", [name01]: 214, [name01_pred]: 214.8},
    {t: "-01:39", [name01]: 215, [name01_pred]: 210.8},
    {t: "-01:37", [name01]: 220, [name01_pred]: 212.9},
    {t: "-01:35", [name01]: 223, [name01_pred]: 211.5},
    {t: "-01:33", [name01]: 219, [name01_pred]: 212.1},
    {t: "-01:31", [name01]: 217, [name01_pred]: 211.4},
    {t: "-01:29", [name01]: 215, [name01_pred]: 213.3},
    {t: "-01:27", [name01]: 217, [name01_pred]: 212.7},
    {t: "-01:26", [name01]: 215, [name01_pred]: 211},
    {t: "-01:25", [name01]: 215, [name01_pred]: 211},
    {t: "-01:24", [name01]: 215, [name01_pred]: 211.5},
    {t: "-01:23", [name01]: 215, [name01_pred]: 211.5},
    {t: "-01:22", [name01]: 215, [name01_pred]: 212.4},
    {t: "-01:21", [name01]: 216, [name01_pred]: 212.4},
    {t: "-01:20", [name01]: 216, [name01_pred]: 212.7},
    {t: "-01:19", [name01]: 219, [name01_pred]: 212.7},
    {t: "-01:18", [name01]: 219, [name01_pred]: 208.9},
    {t: "-01:17", [name01]: 221, [name01_pred]: 208.9},
    {t: "-01:16", [name01]: 221, [name01_pred]: 211.6},
    {t: "-01:15", [name01]: 217, [name01_pred]: 211.6},
    {t: "-01:14", [name01]: 217, [name01_pred]: 210.3},
    {t: "-01:13", [name01]: 216, [name01_pred]: 210.3},
    {t: "-01:12", [name01]: 216, [name01_pred]: 211.3},
    {t: "-01:11", [name01]: 220, [name01_pred]: 211.3},
    {t: "-01:10", [name01]: 220, [name01_pred]: 212.8},
    {t: "-01:09", [name01]: 219, [name01_pred]: 212.8},
    {t: "-01:08", [name01]: 219, [name01_pred]: 206.2},
    {t: "-01:07", [name01]: 217, [name01_pred]: 206.2},
    {t: "-01:06", [name01]: 217, [name01_pred]: 211.9},
    {t: "-01:05", [name01]: 215, [name01_pred]: 211.9},
    {t: "-01:04", [name01]: 215, [name01_pred]: 208.3},
    {t: "-01:03", [name01]: 217, [name01_pred]: 208.3},
    {t: "-01:01", [name01]: 217, [name01_pred]: 209.7},
    {t: "-00:59", [name01]: 216, [name01_pred]: 211.7},
    {t: "-00:57", [name01]: 215, [name01_pred]: 206.7},
    {t: "-00:55", [name01]: 216, [name01_pred]: 212},
    {t: "-00:53", [name01]: 216, [name01_pred]: 207.7},
    {t: "-00:51", [name01]: 216, [name01_pred]: 209.9},
    {t: "-00:49", [name01]: 217, [name01_pred]: 210.5},
    {t: "-00:47", [name01]: 214, [name01_pred]: 206.6},
    {t: "-00:45", [name01]: 215, [name01_pred]: 210.2},
    {t: "-00:44", [name01]: 217, [name01_pred]: 204.3},
    {t: "-00:43", [name01]: 217, [name01_pred]: 204.3},
    {t: "-00:42", [name01]: 216, [name01_pred]: 206.6},
    {t: "-00:41", [name01]: 216, [name01_pred]: 206.6},
    {t: "-00:40", [name01]: 216, [name01_pred]: 205.4},
    {t: "-00:39", [name01]: 216, [name01_pred]: 205.4},
    {t: "-00:38", [name01]: 216, [name01_pred]: 203.6},
    {t: "-00:37", [name01]: 214, [name01_pred]: 203.6},
    {t: "-00:36", [name01]: 214, [name01_pred]: 207},
    {t: "-00:35", [name01]: 215, [name01_pred]: 207},
    {t: "-00:34", [name01]: 215, [name01_pred]: 203.2},
    {t: "-00:33", [name01]: 217, [name01_pred]: 203.2},
    {t: "-00:32", [name01]: 217, [name01_pred]: 203.4},
    {t: "-00:31", [name01]: 215, [name01_pred]: 203.4},
    {t: "-00:30", [name01]: 215, [name01_pred]: 202.6},
    {t: "-00:29", [name01]: 214, [name01_pred]: 202.6},
    {t: "-00:28", [name01]: 214, [name01_pred]: 204.3},
    {t: "-00:27", [name01]: 218, [name01_pred]: 204.3},
    {t: "-00:26", [name01]: 218, [name01_pred]: 201.8},
    {t: "-00:25", [name01]: 216, [name01_pred]: 201.8},
    {t: "-00:24", [name01]: 216, [name01_pred]: 201.8},
    {t: "-00:23", [name01]: 215, [name01_pred]: 201.8},
    {t: "-00:22", [name01]: 215, [name01_pred]: 202.2},
    {t: "-00:21", [name01]: 214, [name01_pred]: 202.2},
    {t: "-00:20", [name01]: 214, [name01_pred]: 200.5},
    {t: "-00:19", [name01]: 215, [name01_pred]: 200.5},
    {t: "-00:18", [name01]: 215, [name01_pred]: 202.4},
    {t: "-00:17", [name01]: 215, [name01_pred]: 202.4},
    {t: "-00:16", [name01]: 215, [name01_pred]: 199.6},
    {t: "-00:15", [name01]: 216, [name01_pred]: 199.6},
    {t: "-00:13", [name01]: 216, [name01_pred]: 199.4},
    {t: "-00:11", [name01]: 215, [name01_pred]: 200.3},
    {t: "-00:09", [name01]: 215, [name01_pred]: 197.7},
    {t: "-00:07", [name01]: 213, [name01_pred]: 200.5},
    {t: "-00:05", [name01]: 214, [name01_pred]: 197.8},
    {t: "-00:03", [name01]: 215, [name01_pred]: 198.1},
    {t: "-00:01", [name01]: 213, [name01_pred]: 205.3},

    {t: "00:00", [name01]: 212, [name01_pred]: 207.6},

    {t: "00:01", [name01_pred]: "210.6"},
    {t: "00:03", [name01_pred]: "210.6"},
    {t: "00:05", [name01_pred]: "211.7"},
    {t: "00:07", [name01_pred]: "211.7"},
    {t: "00:09", [name01_pred]: "211.3"},
    {t: "00:11", [name01_pred]: "211.3"},
    {t: "00:13", [name01_pred]: "210.5"},
    {t: "00:15", [name01_pred]: "210.5"},
    {t: "00:16", [name01_pred]: "210.9"},
    {t: "00:17", [name01_pred]: "210.9"},
    {t: "00:18", [name01_pred]: "210.3"},
    {t: "00:19", [name01_pred]: "210.3"},
    {t: "00:20", [name01_pred]: "210.2"},
    {t: "00:21", [name01_pred]: "210.2"},
    {t: "00:22", [name01_pred]: "210.5"},
    {t: "00:23", [name01_pred]: "210.5"},
    {t: "00:24", [name01_pred]: "210.9"},
    {t: "00:25", [name01_pred]: "210.9"},
    {t: "00:26", [name01_pred]: "211.3"},
    {t: "00:27", [name01_pred]: "211.3"},
    {t: "00:28", [name01_pred]: "210.8"},
    {t: "00:29", [name01_pred]: "210.8"},
    {t: "00:30", [name01_pred]: "212.4"},
    {t: "00:31", [name01_pred]: "212.4"},
    {t: "00:32", [name01_pred]: "213.4"},
    {t: "00:33", [name01_pred]: "213.4"},
    {t: "00:34", [name01_pred]: "211.6"},
    {t: "00:35", [name01_pred]: "212.5"},
    {t: "00:36", [name01_pred]: "212.5"},
    {t: "00:37", [name01_pred]: "210.1"},
    {t: "00:38", [name01_pred]: "210.1"},
    {t: "00:39", [name01_pred]: "209.7"},
    {t: "00:40", [name01_pred]: "209.7"},
    {t: "00:41", [name01_pred]: "210.9"},
    {t: "00:42", [name01_pred]: "210.9"},
    {t: "00:43", [name01_pred]: "210.1"},
    {t: "00:44", [name01_pred]: "210.1"},
    {t: "00:45", [name01_pred]: "212.1"},
    {t: "00:47", [name01_pred]: "212.1"},
    {t: "00:49", [name01_pred]: "212.7"},
    {t: "00:51", [name01_pred]: "212.7"},
    {t: "00:53", [name01_pred]: "211.8"},
    {t: "00:55", [name01_pred]: "212.7"},
    {t: "00:57", [name01_pred]: "212.7"},
    {t: "00:59", [name01_pred]: "211.6"},
    {t: "01:01", [name01_pred]: "211.6"},
    {t: "01:03", [name01_pred]: "213.1"},
    {t: "01:04", [name01_pred]: "214.5"},
    {t: "01:05", [name01_pred]: "211.3"},
    {t: "01:06", [name01_pred]: "211.3"},
    {t: "01:07", [name01_pred]: "218.6"},
    {t: "01:08", [name01_pred]: "218.6"},
    {t: "01:09", [name01_pred]: "217.7"},
    {t: "01:10", [name01_pred]: "217.7"},
    {t: "01:11", [name01_pred]: "215.1"},
    {t: "01:12", [name01_pred]: "215.1"},
    {t: "01:13", [name01_pred]: "213.2"},
    {t: "01:14", [name01_pred]: "213.2"},
    {t: "01:15", [name01_pred]: "210.8"},
    {t: "01:16", [name01_pred]: "210.8"},
    {t: "01:17", [name01_pred]: "210.9"},
    {t: "01:18", [name01_pred]: "210.9"},
    {t: "01:19", [name01_pred]: "211.7"},
    {t: "01:20", [name01_pred]: "211.7"},
    {t: "01:21", [name01_pred]: "211.7"},
    {t: "01:22", [name01_pred]: "210.2"},
    {t: "01:23", [name01_pred]: "210.2"},
    {t: "01:24", [name01_pred]: "213.3"},
    {t: "01:25", [name01_pred]: "213.3"},
    {t: "01:26", [name01_pred]: "214.4"},
    {t: "01:27", [name01_pred]: "214.4"},
    {t: "01:29", [name01_pred]: "213.6"},
    {t: "01:31", [name01_pred]: "213.6"},
    {t: "01:33", [name01_pred]: "214.6"},
    {t: "01:35", [name01_pred]: "214.6"},
    {t: "01:37", [name01_pred]: "214.4"},
    {t: "01:39", [name01_pred]: "214.4"},
    {t: "01:41", [name01_pred]: "217"},
    {t: "01:43", [name01_pred]: "217"},
    {t: "01:45", [name01_pred]: "216.8"},
    {t: "01:47", [name01_pred]: "216.8"},
    {t: "01:48", [name01_pred]: "216.8"},
    {t: "01:49", [name01_pred]: "216.8"},
    {t: "01:50", [name01_pred]: "218"},
    {t: "01:51", [name01_pred]: "218"},
    {t: "01:52", [name01_pred]: "218.8"},
    {t: "01:53", [name01_pred]: "218.8"},
    {t: "01:54", [name01_pred]: "221.1"},
    {t: "01:55", [name01_pred]: "221.1"},
    {t: "01:56", [name01_pred]: "221.2"},
    {t: "01:57", [name01_pred]: "221.2"},
    {t: "01:58", [name01_pred]: "220.4"},
    {t: "01:59", [name01_pred]: "220.4"},
    {t: "02:00", [name01_pred]: "218.3"},
    {t: "02:01", [name01_pred]: "218.3"},
    {t: "02:02", [name01_pred]: "217.1"},
    {t: "02:03", [name01_pred]: "217.1"},
    {t: "02:04", [name01_pred]: "217.2"},
    {t: "02:05", [name01_pred]: "217.2"},
    {t: "02:07", [name01_pred]: "219.6"},
    {t: "02:09", [name01_pred]: "219.6"},
    {t: "02:11", [name01_pred]: "220.5"},
    {t: "02:13", [name01_pred]: "220.5"},
    {t: "02:15", [name01_pred]: "218.1"},
    {t: "02:17", [name01_pred]: "218.1"},
    {t: "02:19", [name01_pred]: "216.7"},
    {t: "02:21", [name01_pred]: "216.7"},
    {t: "02:23", [name01_pred]: "218.1"},
    {t: "02:25", [name01_pred]: "218.1"},
    {t: "02:27", [name01_pred]: "217.9"},
    {t: "02:29", [name01_pred]: "217.9"},
    {t: "02:30", [name01_pred]: "218.8"},
    {t: "02:31", [name01_pred]: "218.8"},
    {t: "02:32", [name01_pred]: "218.3"},
    {t: "02:33", [name01_pred]: "218.3"},
    {t: "02:34", [name01_pred]: "218.8"},
    {t: "02:35", [name01_pred]: "218.8"},
    {t: "02:36", [name01_pred]: "218.6"},
    {t: "02:37", [name01_pred]: "218.6"},
    {t: "02:38", [name01_pred]: "216.9"},
    {t: "02:39", [name01_pred]: "216.9"},
    {t: "02:40", [name01_pred]: "217.8"},
    {t: "02:41", [name01_pred]: "217.8"},
    {t: "02:42", [name01_pred]: "219.7"},
    {t: "02:43", [name01_pred]: "219.7"},
    {t: "02:44", [name01_pred]: "220.4"},
    {t: "02:45", [name01_pred]: "220.4"},
    {t: "02:46", [name01_pred]: "217.4"},
    {t: "02:47", [name01_pred]: "217.4"},
    {t: "02:48", [name01_pred]: "218.4"},
    {t: "02:49", [name01_pred]: "218.4"},
    {t: "02:50", [name01_pred]: "216.1"},
    {t: "02:51", [name01_pred]: "216.1"},
    {t: "02:52", [name01_pred]: "217"},
    {t: "02:53", [name01_pred]: "217"},
    {t: "02:54", [name01_pred]: "216.7"},
    {t: "02:55", [name01_pred]: "216.7"},
    {t: "02:56", [name01_pred]: "217.8"},
    {t: "02:57", [name01_pred]: "217.8"},
    {t: "02:58", [name01_pred]: "220.2"},
    {t: "02:59", [name01_pred]: "220.2"},
    {t: "03:00", [name01_pred]: "218.6"},
    {t: "03:01", [name01_pred]: "218.6"},
    {t: "03:02", [name01_pred]: "217.6"},
    {t: "03:03", [name01_pred]: "217.6"},
    {t: "03:04", [name01_pred]: "217"},
    {t: "03:05", [name01_pred]: "217"},
    {t: "03:06", [name01_pred]: "218"},
    {t: "03:07", [name01_pred]: "218"},
    {t: "03:08", [name01_pred]: "218.6"},
    {t: "03:09", [name01_pred]: "218.6"},
    {t: "03:10", [name01_pred]: "217.2"},
    {t: "03:11", [name01_pred]: "217.2"},
    {t: "03:12", [name01_pred]: "218"},
    {t: "03:13", [name01_pred]: "218"},
    {t: "03:14", [name01_pred]: "219.1"},
    {t: "03:15", [name01_pred]: "219.1"},
    {t: "03:16", [name01_pred]: "219.8"},
    {t: "03:17", [name01_pred]: "219.8"},
    {t: "03:18", [name01_pred]: "219.7"},
    {t: "03:19", [name01_pred]: "219.7"},
    {t: "03:20", [name01_pred]: "218.8"},
    {t: "03:21", [name01_pred]: "218.8"},
    {t: "03:22", [name01_pred]: "218.4"},
    {t: "03:23", [name01_pred]: "218.4"},
    {t: "03:24", [name01_pred]: "219.6"},
    {t: "03:25", [name01_pred]: "219.6"},
    {t: "03:26", [name01_pred]: "218.8"},
    {t: "03:27", [name01_pred]: "218.8"},
    {t: "03:28", [name01_pred]: "218.3"},
    {t: "03:29", [name01_pred]: "218.3"},
    {t: "03:30", [name01_pred]: "217.9"},
    {t: "03:31", [name01_pred]: "217.9"},
    {t: "03:32", [name01_pred]: "218.3"},
    {t: "03:33", [name01_pred]: "218.3"},
    {t: "03:34", [name01_pred]: "217.6"},
    {t: "03:35", [name01_pred]: "217.6"},
    {t: "03:36", [name01_pred]: "217.1"},
    {t: "03:37", [name01_pred]: "217.1"},
    {t: "03:38", [name01_pred]: "217"},
    {t: "03:39", [name01_pred]: "217"},
    {t: "03:40", [name01_pred]: "217.6"},
    {t: "03:41", [name01_pred]: "217.6"},
    {t: "03:42", [name01_pred]: "217.2"},
    {t: "03:43", [name01_pred]: "217.5"},
    {t: "03:44", [name01_pred]: "216.1"},
    {t: "03:45", [name01_pred]: "216.7"},
    {t: "03:46", [name01_pred]: "219.3"},
    {t: "03:47", [name01_pred]: "217.9"},
    {t: "03:48", [name01_pred]: "216.5"},
    {t: "03:49", [name01_pred]: "215.8"},
    {t: "03:50", [name01_pred]: "217.7"},
    {t: "03:51", [name01_pred]: "218.5"},
    {t: "03:52", [name01_pred]: "218.1"},
    {t: "03:53", [name01_pred]: "218.1"},
    {t: "03:54", [name01_pred]: "218.1"},
    {t: "03:55", [name01_pred]: "218.1"},
    {t: "03:56", [name01_pred]: "218.1"},
    {t: "03:57", [name01_pred]: "218.9"},
    {t: "03:58", [name01_pred]: "218.9"},
    {t: "03:59", [name01_pred]: "217.8"},
    {t: "04:00", [name01_pred]: "217.8"},
];

const renderColorfulLegendText = (value, entry) => {
    const {color} = entry;

    return <span
        style={{color}}
        onClick={() => alert("Click!")}
    >
		{value}
	</span>;
};

export const GraphForPreviewAudio = () => (
    <LineChart
        width={1580}
        height={300}
        data={dataForAudioGraph}
        margin={{top: -20, right: 20, bottom: 5, left: 0}}
    >

        <Line type="monotone" dataKey={name01} stroke="#F08080" strokeWidth={1} dot={false}/>
        <Line type="monotone" dataKey={name01_pred} stroke="#DC143C" strokeWidth={1} dot={false}/>


        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
        <XAxis dataKey="t"/>
        <YAxis domain={['auto', 'auto']}
               label={{value: "Pressure, mm H2O", position: "insideLeft", angle: -90, dy: 30, dx: 5}}/>
        {/*<YAxis domain={[{minOy}, {maxOy}]}/>*/}
        <Legend
            align={'left'}
            verticalAlign={'top'}
            wrapperStyle={{
                fontSize: 18,
                top: -30,
                left: 60,
            }}
            iconType={"circle"}

            formatter={renderColorfulLegendText}/>
        <Tooltip/>
    </LineChart>
);