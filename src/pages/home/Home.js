import React from 'react';
import Charts from '../charts-js/Charts';
import PieChart from '../d3/PieChart';


function Home() {
  return (
    <main className="container center" role="main">   

    <div className="page-area">

        <div className="text-box">
            <h3>Stay on track</h3> 
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div className="text-box">
            <h3>Alerts</h3> 
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div className="text-box">
            <h3>Results</h3> 
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div className="text-box">
            <h3>Free</h3> 
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </div>

        <div className="text-box">
            <h3>Stay on track</h3> 
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div className="text-box">
            <h3>Alerts</h3> 
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div className="text-box">
            <h3>D3 Visualization</h3> 
            <PieChart/>
        </div>

        <div className="text-box">
            <h3>Charts.js Visualization</h3> 
            <Charts></Charts>
        </div>

    </div>

</main>
  );
}

export default Home;