import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChakraProvider, CSSReset, Box, Badge } from "@chakra-ui/react";

const data = [
    { name: 'Mon ', value: 2.5 },
    { name: 'Tue   ', value: 1.2 },
    { name: 'Wed', value: 8 },
    { name: 'Thur', value: 2.5 },
    { name: 'Fri', value: 1.8 },
    { name: 'Sat', value: 1.5 },
    { name: 'Sun', value: 1.2 },
    { name: 'Mon', value: 1.5 },
    { name: 'Tue', value: 1.2 },
    { name: 'Wed', value: 8 },
    { name: 'Thu', value: 1.5 },
    { name: 'Fri', value: 2 },
    { name: 'Sat', value: 1.8 },
    { name: 'Sun', value: 7.6 }
];

function Graphs() {
  return (
    <ChakraProvider>
        
      <CSSReset />
      <Badge top={"10px"} position={"absolute"} backgroundColor={"grey"}>
      <Box p={4} ml={"180px"} pos={"absolute"} top={"900px"} borderRadius={"40px"}>
      <style>
          {`
            .recharts-cartesian-grid line {
              stroke-dasharray: 0 50;
              stroke: #282828;
            }
            .recharts-bar-rectangle:hover {
                fill: transparent !important;
                
              }
              
          `}
        </style>
        <BarChart width={800} height={400} data={data} >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis orientation="left" domain={[0, 8]} ticks={[0, 2, 4, 6, 8]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#333333" barSize={25}/>
        </BarChart>
      </Box>
      </Badge>
    </ChakraProvider>
  );
}

export default Graphs;
