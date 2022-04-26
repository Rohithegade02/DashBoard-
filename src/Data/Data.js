import CottageIcon from '@mui/icons-material/Cottage';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ReceiptIcon from '@mui/icons-material/Receipt';
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';
export const SidebarData=[
    
{
    icon: CottageIcon,
    heading:"DashBoard"
},
{
    icon: FilterFramesIcon,
    heading:"Orders"
},
{
    icon: PeopleIcon,
    heading:"Customers"
},
{
    icon: InventoryIcon,
    heading:"Package"
},
{
    icon: InsertChartIcon,
    heading:"Chart"
}];

export const CardData =[
    {
        title: "Sales",
        color :{
            backGround:"linear-gradient(180deg, #bb67ff 0%,#c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5"
        },
        barValue:70,
        value:'25,970',
        png :MonetizationOnIcon,
        series:[
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title: "Revenue",
        color :{
            backGround:"linear-gradient(180deg, #FF919D 0%,#FC929D 100%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7"
        },
        barValue:80,
        value:'14,270',
        png :CreditScoreIcon,
        series:[
            {
                name:"Revenue",
                data:[10,100,50,70,80,30,40],
            },
        ],
    },
    {
        title: "Expenses",
        color :{
            backGround:"linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113 ) -46.42%)",
            boxShadow:"0px 10px 20px 0px #F9D59B"
        },
        barValue:60,
        value:'4,270',
        png :ReceiptIcon,
        series:[
            {
                name:"Expenses",
                data:[10,25,15,30,12,15,20],
            },
        ],
    }
]


export const UpdatesData=[
    {
        img:img1,
        name:"Andrew Thomas",
        not1:'has ordered Apple smart watch 2500mh battery.',
        time:'25 seconds ago'
    },
    {
        img:img2,
        name:"James",
        not1:'has received Samsung gadget for charging battery.',
        time:'25 seconds ago'
    },
    {
        img:img3,
        name:"Iron Man",
        not1:'has ordered Apple smart watch ,samsung Gear 2500mh battery.',
        time:'2 hours ago'
    }
]