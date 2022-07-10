import {React} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';

export default function Admindashboard(){

    const options = {
        title: {
          text: ''
        },
        chart:{
        type:'column'
        },
        xAxis:{
        categories:['January','February','March']
        },
        yAxis:{
        title:{
            text:'Clicks per Sales'
        }
        },
        series: [{
          data: [1, 2, 7,6]
        }],
        credits:false
      }

      const options2 = {
        title: {
          text: ''
        },
        chart:{
        type:'pie'
        },
        xAxis:{
        categories:['January','February','March']
        },
        yAxis:{
        title:{
            text:'Clicks per Sales'
        }
        },
        series: [{
          data: [1, 2, 7,6]
        }],
        credits:false
      }

      
    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'><p>Dasboard</p></div>

        <div className='adminstat1con'>
            <div className='adminstat1'>
                <div className='adminstat1icon'>
                    <div style={{background:'rgba(255, 69, 0,0.4)',color:'rgb(255, 69, 0)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Sales</p>
                <p>$21456</p>
                </div>
            </div>

            <div className='adminstat1'>
                <div className='adminstat1icon'>
                <div style={{background:'rgba(30, 144, 255,0.4)',color:'rgb(30, 144, 255)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Orders</p>
                <p>32</p>
                </div>
            </div>

            <div className='adminstat1'>
                <div className='adminstat1icon'>
                <div style={{background:'rgba(60, 179, 113,0.4)',color:'rgb(60, 179, 113)'}}>
                        <i className='fa fa-support'/></div>
                </div>
                <div className='adminstat1details'>
                <p>Total Products</p>
                <p>234</p>
                </div>
            </div>
        </div>

        <div className='adminstat2con'>
            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Sale Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options}
                />
                </div>
                <div className='chartfilterscon'>
                    <select>
                    <option defaultValue='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    </select>
                    <select>
                    <option defaultValue='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                    </select>
                    <select>
                    <option defaultValue='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                    </select>
                </div>
            </div>

            <div className='adminstat2'>
                <div className='adminstat2heading'><p>Product Statistics</p></div>
                <div className='adminstat2stat'>
                <HighchartsReact
                highcharts={Highcharts}
                options={options2}
                />
                </div>
                <div className='chartfilterscon'>
                    <select>
                    <option defaultValue='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    </select>
                    <select>
                    <option defaultValue='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                    </select>
                    <select>
                    <option defaultValue='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                    </select>
                </div>
            </div>

        </div>

        <div className='adminstat3con'>
        <div className='adminstat2heading'><p>Latest Orders</p></div>
        <div className='adminstat3'>
            <div className='adminstat3info'>
            <table>
            <tbody>
            <tr>
            <td>Tasha</td>
            <td>Tasha@gmail.com</td>
            <td>$55.67</td>
            <td>Paid</td>
            <td>10/06/2022</td>
            <td><i className='fa fa-eye'/></td>
            </tr>

            <tr>
            <td>Tasha</td>
            <td>Tasha@gmail.com</td>
            <td>$55.67</td>
            <td>Paid</td>
            <td>10/06/2022</td>
            <td><i className='fa fa-eye'/></td>
            </tr>

            <tr>
            <td>Tasha</td>
            <td>Tasha@gmail.com</td>
            <td>$55.67</td>
            <td>Paid</td>
            <td>10/06/2022</td>
            <td><i className='fa fa-eye'/></td>
            </tr>

            <tr>
            <td>Tasha</td>
            <td>Tasha@gmail.com</td>
            <td>$55.67</td>
            <td>Paid</td>
            <td>10/06/2022</td>
            <td><i className='fa fa-eye'/></td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}