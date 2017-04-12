import DataSet from '../src/base/dataSet';

let queryDataSet = new DataSet({
  id: 'form',
  data: {
    title: '',
    name: ''
  }
});

let dataset1 = new DataSet({
  queryDataSet: 'form',
  queryUrl: ''
});


dataset1.query();
