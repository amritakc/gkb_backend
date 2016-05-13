(function(w,d,s,g,js,fjs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(cb){this.q.push(cb)}};
  js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fjs.parentNode.insertBefore(js,fjs);js.onload=function(){g.load('analytics')};
}(window,document,'script'));


gapi.analytics.ready(function() {

  // Step 3: Authorize the user.

  var CLIENT_ID = '930334374032-7n4ufcdq95j75jenk99ssuobjrqsk6te.apps.googleusercontent.com';

  gapi.analytics.auth.authorize({
    container: 'embed-api-auth-container',
    clientid: CLIENT_ID,
  });

  // Step 4: Create the view selector.
 /**
   * Create a new ViewSelector instance to be rendered inside of an
   * element with the id "view-selector-container".
   */
  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector-container'
  });

  // Render the view selector to the page.
  viewSelector.execute();


  /**
   * Create a new DataChart instance with the given query parameters
   * and Google chart options. It will be rendered inside an element
   * with the id "chart-container".
   */
  var dataChart = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:organicSearches',
      dimensions: 'ga:date',
      'start-date': '2daysAgo',
      'end-date': 'yesterday'
    },
    chart: {
      container: 'chart-container',
      type: 'LINE',
      options: {
        width: '100%',
        title: "Organic Searches",
        fontsize: 12
      }
    }
  });


  var dataChart2 = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:newUsers',
      dimensions: 'ga:date',
      'start-date': '2daysAgo',
      'end-date': 'yesterday'
    },
    chart: {
      container: 'chart-container1',
      type: 'LINE',
      options: {
        width: '100%',
        title: "New Users",
        fontsize: 12
      }
    }
  });


  var dataChart3 = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:bounceRate',
      dimensions: 'ga:date',
      'start-date': '2daysAgo',
      'end-date': 'yesterday'
    },
    chart: {
      container: 'chart-container2',
      type: 'LINE',
      options: {
        width: '100%',
        title: "Bounce Rate%",
        fontsize: 12
      }
    }
  });

    var dataChart4 = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:users',
      dimensions: 'ga:city'
    },
    chart: {
      container: 'chart-container3',
      type: 'BAR',
      options: {
        width: '100%',
        title: "Users origin",
        fontsize: 12
      }
    }
  });


  var dataChart5 = new gapi.analytics.googleCharts.DataChart({
    query: {
      'start-date': '5daysAgo',
      'end-date': 'yesterday',
      'metrics': 'ga:users',
      'dimensions': 'ga:date'
    },
    chart: {
      'container': 'chart-container4',
      'type': 'LINE',
      'options': {
        'width': '100%',
        title: 'Site traffic (sessions vs users)'
      }
    }
  });
 

  var dataChart6 = new gapi.analytics.googleCharts.DataChart({
    query: {
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
      'metrics': 'ga:pageviews',
      'dimensions': 'ga:pagePathLevel1',
      'sort': '-ga:pageviews',
      'filters': 'ga:pagePathLevel1!=/',
      'max-results': 7
    },
    chart: {
      'container': 'chart-container5',
      'type': 'PIE',
      'options': {
        'width': '100%',
        'pieHole': 4/9,
      }
    }
  });



  /**
   * Render the dataChart on the page whenever a new view is selected.
   */
  viewSelector.on('change', function(ids) {
    dataChart.set({query: {ids: ids}}).execute();
    dataChart2.set({query: {ids: ids}}).execute();
    dataChart3.set({query: {ids: ids}}).execute();
    dataChart4.set({query: {ids: ids}}).execute();
    dataChart5.set({query: {ids: ids}}).execute();
    dataChart6.set({query: {ids: ids}}).execute();




  });

});