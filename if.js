var Table = ReactBootstrap.Table;
var Pager = ReactBootstrap.Pager;
var PageItem = ReactBootstrap.PageItem;
var dayInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var Calendar = React.createClass({
  getInitialState : function() {
  var a = new Date();
  var year = a.getYear();
  var month = a.getMonth();
  var date = a.getDate();
    return {
      year: year,
      month : month,
      date : date
    };
  },
  render: function() {
      var arr = [];
      var brr = [];
      var crr = [];
      var t = [];
      var year = this.state.year;
      var month = this.state.month;
      var a = new Date();
      var ifIsRun = (year % 4 === 0 && year % 100 !== 0) || year % 400 == 0;
      a.setDate(1);
      var _day = a.getDay();
      for (var i = 1; i < _day; ++ i)
          arr.push(<th></th>);
      var dayOfMonth = dayInMonth[month];
      if (month === 2) {
          if (ifIsRun === true)
              dayOfMonth = 29;
      }
      for (var i = 1; i <= dayOfMonth; ++ i) arr.push(<th>{i}</th>);
      for (var i = 0; i < arr.length; ++ i) {
          if (i % 7 === 0 && i > 0) {
              brr.push(<tr>crr</tr>);
              crr = [];
          }
          crr.push(a[i]);
      }
      if (crr.length > 0)
        brr.push(<tr>{crr}</tr>);
      brr = (<tbody>{brr}</tbody>);
      for (var i = 0; i < 7; ++ i) t.push(<th>{i}</th>);
      var x = <th>#</th>;
      var y = <tr>{x}{t}</tr>;
      var z = <thead>{y}</thead>;
      return <Table responsive> {z}{brr} </Table>;
  }
});

var Try = React.createClass({
    render: function() {
      return <Pager>
        <PageItem previous href='#'>last month</PageItem>
        <Input> </Input>
        <PageItem next href='#'>next month</PageItem>
        <div></div>
        <Calendar> </Calendar>
      </Pager>;
    }
});

React.render(<Try />, document.getElementById('try'));