import classes from './Utility.module.css';
import { ResponsiveRadar } from '@nivo/radar'

const utility = (props) => {
    const data = [
        {
            "Skill": "Python",
            "projects": 10,
            "frameworks": 2,
            "years": 3
        },
        {
            "Skill": "Javascript",
            "projects": 4,
            "frameworks": 2,
            "years": 2
        },
        {
            "Skill": "PHP",
            "projects": 3,
            "frameworks": 1,
            "years": 2
        }
    ]
    return (
        <div className={classes.GraphHolder}>
        <ResponsiveRadar
            data={data}
            keys={[ 'projects', 'frameworks', 'years' ]}
            indexBy="Skill"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: 'nivo' }}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionConfig="wobbly"
            isInteractive={true}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
        </div>
    )
}

export default utility;