import { Col, Row } from "antd";
import Chart from "react-apexcharts";

const getOptions = (label) => {
  return {
    series: [75],
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: [label],
  };
}

const getSeries = (value) => {
  return [value]
}

export const ChartRealtime = (props) => {
  const { sensor } = props
  const seriesHum = getSeries(sensor.Hum)
  const optionsHum = getOptions("Humidity(%)")

  const seriesTemp = getSeries(sensor.Temp)
  const optionsTemp = getOptions("Temperature(°C)")

  const options = {
    chart: {
      id: "basic-bar",
      color: "red"
    },
    title: {
      text: 'Soil Moisture',
      floating: true,
      align: 'center',
      style: {
        color: '#444'
      }
    },
    xaxis: {
      categories: ["Area 1", "Area 2", "Area 3","Area 4","Area 5","Area 6"],
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
        colors: {
          ranges: [{
            from: 0,
            to: 30,
            color: '#ef4444'
          }, {
            from: 30,
            to: 70,
            color: '#22c55e'
          },
          {
            from: 70,
            to: 100,
            color: '#ef4444'
          },
          ]
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
  }
  const series = [
    {
      name: "series-1",
      data: [sensor.landHum1, sensor.landHum2, sensor.landHum3,sensor.landHum4,sensor.landHum5,sensor.landHum6],
    }
  ]


  return <div style={{ padding: "0 4rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
    <Row>
      <Col>
        <Chart
          series={seriesHum}
          options={optionsHum}
          type="radialBar"
          width="400"
          height="400"
        />
      </Col>


      <Col>
        <Chart
          series={seriesTemp}
          options={optionsTemp}
          type="radialBar"
          width="400"
          height="400"
        />
      </Col>
    </Row>


    <Chart
      series={series}
      options={options}
      type="bar"
      width="700"
      height="350"
    />

  </div>
}