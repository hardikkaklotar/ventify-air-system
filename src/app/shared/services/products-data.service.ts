import { Injectable } from '@angular/core';
import { Images, Product } from '../product';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Industrial Exhaust Fan',
      description: 'An industrial exhaust fan is used to ventilate large spaces by removing hot, humid, or polluted air and bringing in fresh air. This helps maintain air quality, prevent equipment overheating, and ensure a safe environment. These fans are built for heavy-duty use and come in various sizes to meet specific needs.',
      image: '../../assets/images/product/exhaust-fan.webp',
      imageKeyFeatures: '../../assets/images/product/exhaust-fan-two.png',
      keyFeatures: ['Powerful Airflow', 'Robust Construction', 'Energy Efficient', 'Noise Reduction', 'Easy Installation', 'Low Maintenance'],
      displayedColumns: ['MODEL NUMBER', 'VIS - 740', 'VIS - 800', 'VIS - 1000 ', 'VIS - 1380', 'VIS - 1530'],
      tableData: [
        {
          columns1: 'DIAMETION (I X W X H) (MM)',
          columns2: '740*740*450',
          columns3: '800*800*400',
          columns4: '1000*1000*400',
          columns5: '1380*1380*400',
          columns6: '1530*1530*400',
        },
        {
          columns1: 'AIR FLOW (m3/h)',
          columns2: '10600',
          columns3: '28000',
          columns4: '32000',
          columns5: '44000',
          columns6: '55800',
        },
        {
          columns1: 'DIAMETER BLADE (MM)',
          columns2: '609',
          columns3: '750',
          columns4: '960',
          columns5: '1270',
          columns6: '1400',
        },
        {
          columns1: 'RATED VOLTAGE (V)',
          columns2: '220/380',
          columns3: '220/380',
          columns4: '220/380',
          columns5: '220/380',
          columns6: '220/380',
        },
        {
          columns1: 'IMPORT POWER (W)',
          columns2: '370',
          columns3: '370',
          columns4: '550',
          columns5: '1100',
          columns6: '1500',
        },
        {
          columns1: 'NOISE (DECIBELS)',
          columns2: '69',
          columns3: '65',
          columns4: '65',
          columns5: '64',
          columns6: '64',
        },
        {
          columns1: 'BLADE ROTATIONAL SPEED (RPM)',
          columns2: '960',
          columns3: '630',
          columns4: '600',
          columns5: '439',
          columns6: '325',
        }
      ]
    },
    {
      id: 2,
      title: 'Industrial FRP Exhaust Fan',
      description: 'An industrial FRP (Fiberglass Reinforced Plastic) exhaust fan is designed for harsh environments, offering resistance to corrosion, chemicals, and moisture. It is lightweight yet durable, ideal for removing fumes, heat, and pollutants in factories, chemical plants, and other industrial settings. FRP fans are energy-efficient, low-maintenance, and suitable for use in highly corrosive or moist atmospheres.',
      image: '../../assets/images/product/frp-exhaust-fan.webp',
      imageKeyFeatures: '../../assets/images/product/frp-exhaust-fan-two.jpg',
      keyFeatures: ['Corrosion Resistance', 'Low Maintenance', 'Energy Efficiency', 'Noise Reduction', 'Temperature Resistance', 'Customizability'],
      displayedColumns: [
        'MODEL NUMBER', 
        'VIS - 560', 
        'VIS - 800', 
        'VIS - 850', 
        'VIS - 1060', 
        'VIS - 1260', 
        'VIS - 1460'
      ],
      tableData: [
        {
          columns1: 'DIMENSION (I X W X H) (MM)',
          columns2: '560*560*450',
          columns3: '660*660*450',
          columns4: '850*850*450',
          columns5: '1060*1060*460',
          columns6: '1260*1260*570',
          columns7: '1460*1460*590'
        },
        {
          columns1: 'AIR VOLUME (m3/h)',
          columns2: '6000',
          columns3: '8000',
          columns4: '20000',
          columns5: '28000',
          columns6: '36000',
          columns7: '44000'
        },
        {
          columns1: 'DIAMETER BLADE (MM)',
          columns2: '380',
          columns3: '480',
          columns4: '650',
          columns5: '880',
          columns6: '1080',
          columns7: '1250'
        },
        {
          columns1: 'BLADE SPEED (RPM)',
          columns2: '1400',
          columns3: '1400',
          columns4: '700',
          columns5: '560',
          columns6: '560',
          columns7: '560'
        },
        {
          columns1: 'IMPORT POWER (W)',
          columns2: '250',
          columns3: '370',
          columns4: '370',
          columns5: '550',
          columns6: '750',
          columns7: '750/1100'
        },
        {
          columns1: 'NOISE (DECIBELS)',
          columns2: '60-70',
          columns3: '60-70',
          columns4: '60-70',
          columns5: '60-70',
          columns6: '60-70',
          columns7: '60-70'
        }
      ]
    },
    {
      id: 3,
      title: 'HVLS Fan',
      description: 'An HVLS (High-Volume, Low-Speed) fan is a large ceiling fan designed to move a significant amount of air at a slow speed. These fans are typically used in large spaces like warehouses, gyms, or barns to improve air circulation, reduce humidity, and maintain a comfortable temperature. By moving air gently across a wide area, HVLS fans are energy-efficient and can help reduce heating and cooling costs.',
      image: '../../assets/images/product/hvls-fan.jpg',
      imageKeyFeatures: '../../assets/images/product/hvls-fan-two.jpg',
      keyFeatures: ['Large Diameter', 'Energy Efficiency', 'Safety Features', 'Improved Air Quality', 'Customizable Control', 'Cost Savings'],
      displayedColumns: [
        'MODEL NUMBER', 
        'VIS-7A', 
        'VIS-6A', 
        'VIS-5A', 
        'VIS-4A', 
        'VIS-3.7A', 
        'VIS-3A', 
        'VIS-2D'
      ],
      tableData: [
        {
          columns1: 'SIZE',
          columns2: '7.3m(24ft)',
          columns3: '6.1m(20ft)',
          columns4: '5.5m(18ft)',
          columns5: '4.9m(16ft)',
          columns6: '3.7m(12ft)',
          columns7: '3.0m(10ft)',
          columns8: '2.4m(08ft)',
        },
        {
          columns1: 'MOTOR (kw/HP)',
          columns2: '1.1/1.5',
          columns3: '1.1/1.5',
          columns4: '1.1/1.5',
          columns5: '0.75/1.0',
          columns6: '0.37/0.5',
          columns7: '0.37/0.5',
          columns8: '0.3/0.4',
        },
        {
          columns1: 'AIR VOLUME (CMM)',
          columns2: '13000',
          columns3: '11500',
          columns4: '11000',
          columns5: '10000',
          columns6: '5000',
          columns7: '4000',
          columns8: '2600',
        },
        {
          columns1: 'TOTAL WEIGHT (KG)',
          columns2: '116',
          columns3: '113',
          columns4: '111',
          columns5: '69',
          columns6: '56',
          columns7: '50',
          columns8: '25',
        },
        {
          columns1: 'RPM',
          columns2: '0-55',
          columns3: '0-60',
          columns4: '0-70',
          columns5: '0-80',
          columns6: '0-100',
          columns7: '0-115',
          columns8: '0-160',
        }
      ]
    },
    {
      id: 4,
      title: 'Industrial Turbo Air Ventilator',
      description: 'An industrial air ventilator is a device used to expel hot, stale air and bring in fresh air in large industrial settings like factories, warehouses, and workshops. These ventilators often work without electricity, using wind power or temperature differences to drive air exchange. They help maintain a comfortable environment, reduce humidity, and prevent the buildup of harmful fumes or gases. Industrial air ventilators are energy-efficient and essential for ensuring good air quality in industrial spaces.',
      image: '../../assets/images/product/turbo-air-ventilator.webp',
      imageKeyFeatures: '../../assets/images/product/turbo-air-ventilator-two.webp',
      keyFeatures: ['Non-Electric Operation', 'Energy Efficiency', 'Low Maintenance', 'Continuous Air Flow', 'Silent Operation', 'Temperature Control'],
      displayedColumns: [
        'MODEL NUMBER', 
        'Turbine Diameter', 
        'MOC of Vanes', 
        'MOC of Top Plate', 
        'Dia of Top Plate', 
        'Nos of Bearing', 
        'Nos of Vanes', 
        'Thickness of Vanes', 
      ],
      tableData: [
        {
          columns1: 'VIS-21 (Bearing)',
          columns2: '21"/28"',
          columns3: 'Hindalco MAKE',
          columns4: 'Stainless steel (0.5mm)',
          columns5: '455mm ± 5 mm',
          columns6: '02 Nos',
          columns7: '36 Nos',
          columns8: '0.5 mm',
          
        },
        {
          columns1: 'VIS-21 (Plate)',
          columns2: '24"/32"',
          columns3: 'Hindalco MAKE',
          columns4: 'Stainless steel (0.5mm)',
          columns5: '500mm ± 5 mm',
          columns6: '02 Nos',
          columns7: '42 Nos',
          columns8: '0.5 mm',
          
        },  
      ]
    },
    {
      id: 5,
      title: 'Evaporative Cooling Pad',
      description: 'Cooling pads are essential components in evaporative cooling systems, designed to enhance air cooling efficiency. They work by absorbing water and allowing warm air to pass through, which cools the air through evaporation. Ideal for residential, commercial, and industrial use, cooling pads offer energy-efficient and eco-friendly temperature regulation. With durable materials and easy installation, they ensure optimal performance and comfort during hot weather. Upgrade your cooling setup with high-quality cooling pads for a refreshing environment.',
      image: '../../assets/images/product/cooling-pad.webp',
      imageKeyFeatures: '../../assets/images/product/cooling-pad-two.jpg',
      keyFeatures: ['Easy Installation', 'Eco-Friendly', 'Low Maintenance', 'Improved Air Quality', 'Cost Effective', 'Durable Materials'],
      displayedColumns: [
        'MODEL NUMBER', 
        'HEIGHT (mm)', 
        'WEIGHT (mm)', 
        'DEPTH (mm)', 
        'FLUTE HEIGHT (mm)', 
        'Color', 
      ],
      tableData: [
        {
          columns1: 'VIS-7090',
          columns2: '1200, 1500, 1800, 2000',
          columns3: '900, 600',
          columns4: '100, 150, 200, 300',
          columns5: '7',
          columns6: 'Brown, Black Coated',
        },
        {
          columns1: 'VIS-7090',
          columns2: 'As per requirement',
          columns3: 'As per requirement',
          columns4: '50 - 150',
          columns5: '5',
          columns6: 'Brown, Black Coated',
        },  
      ]
    },
    {
      id: 6,
      title: 'Industrial Air Cooler',
      description: 'An industrial air cooler is a large-scale cooling device designed to lower temperatures in commercial and industrial settings. It uses water evaporation to cool air, making it an energy-efficient alternative to traditional air conditioning. These coolers are typically robust, suitable for high-temperature environments, and help maintain comfortable working conditions while reducing humidity levels.',
      image: '../../assets/images/product/air-cooler.webp',
      imageKeyFeatures: '../../assets/images/product/air-cooler-two.jpg',
      keyFeatures: ['Low Power Consumption', 'Superior Cooling', 'Easy Installation', 'Powerful Fans', 'High Cooling Capacity', 'Large Water Tank'],
      displayedColumns: [
        'MODEL NUMBER', 
        'SIZE (M)', 
        'POWER', 
        'AIR FLOW (M/H)', 
        'WATER TANK', 
        'WEIGHT', 
        'COOLING AREA', 
        'AIR OUTLET SIZE', 
      ],
      tableData: [
        {
          columns1: 'VIS-1080',
          columns2: '1.08*1.08*0.95',
          columns3: '1.1 KW',
          columns4: '18000',
          columns5: '20 L',
          columns6: '55 KG',
          columns7: '800-1200 Sqft',
          columns8: '800-1200 Sqft',
          
        },
        {
          columns1: 'VIS-1300',
          columns2: '1.3*1.3*1.18',
          columns3: '3.0 KW',
          columns4: '30000',
          columns5: '40 L',
          columns6: '100 KG',
          columns7: '1800-2200 Sqft',
          columns8: '800*800 mm',
        },  
      ]
    },
    {
      id: 7,
      title: 'Big Airflow Industrial Cooler',
      description: 'An industrial air cooler is a large-scale cooling device designed to lower temperatures in commercial and industrial settings. It uses water evaporation to cool air, making it an energy-efficient alternative to traditional air conditioning. These coolers are typically robust, suitable for high-temperature environments, and help maintain comfortable working conditions while reducing humidity levels.',
      image: '../../assets/images/product/large-air-cooler.webp',
      imageKeyFeatures: '../../assets/images/product/large-air-cooler-two.webp',
      keyFeatures: ['High Airflow Capacity', 'Durable Construction', '100% Pure Copper Motor', 'Energy Efficiency', 'Low Maintenance', 'Environmental Friendliness'],
      displayedColumns: [
        'MODEL NUMBER', 
        'SIZE (M)', 
        'POWER', 
        'AIR FLOW (M/H)', 
        'WATER TANK', 
        'WEIGHT', 
        'VOLTAGE FREQUENCY', 
        'NOISE', 
      ],
      tableData: [
        {
          columns1: 'VIS-800',
          columns2: '0.8*0.8*1.52',
          columns3: '0.75 KW',
          columns4: '13000',
          columns5: '100 L',
          columns6: '27/28 KG',
          columns7: '220V/50HZ',
          columns8: '60dBA',
          
        },
        {
          columns1: 'VIS-900',
          columns2: '0.9*0.9*1.75',
          columns3: '1.0 KW',
          columns4: '16000',
          columns5: '130 L',
          columns6: '41/42 KG',
          columns7: '220V/50HZ',
          columns8: '60dBA',
        },  
      ]
    },
    {
      id: 8,
      title: 'Tent Cooler',
      description: 'A tent cooler is a portable cooling system designed to maintain a comfortable temperature inside a tent. It typically uses fans, ice, or evaporative cooling to reduce heat, making it ideal for camping in hot weather. Some models are compact and battery-operated, ensuring easy setup and transport for outdoor enthusiasts.',
      image: '../../assets/images/product/tent-cooler.webp',
      imageKeyFeatures: '../../assets/images/product/tent-cooler-two.jpg',
      keyFeatures: ['Cooling Mechanism', 'Water Capacity', 'Easy Maintenance', 'Energy Efficiency', 'Compact Size', 'Environmental Friendliness'],
      displayedColumns: [
        'MODEL NUMBER', 
        'Product Dimension (L*W*H) m', 
        'Cooling Pad Size (m)', 
        'AIR FLOW CFM', 
        'RPM/HP', 
        'WEIGHT (Kgs) Capacity', 
        'Area Coverage', 
        'Motor Type (3 Speed)', 
        'Fan Type', 
      ],
      tableData: [
        {
          columns1: 'VIS-1600',
          columns2: '1.135*0.6*1.6',
          columns3: '1.1*0.1*1.15',
          columns4: '10594',
          columns5: '950/0.75',
          columns6: '51 90 Ltr',
          columns7: '2550 sqft',
          columns8: 'Single Phase',
          columns9: 'Axial 30"',
          
        },
        {
          columns1: 'VIS-1642',
          columns2: '1.131*0.62*1.642',
          columns3: '1.1*0.1*1.15',
          columns4: '10594',
          columns5: '950/0.75',
          columns6: '55 150 Ltr',
          columns7: '2550 sqft',
          columns8: 'Single Phase',
          columns9: 'Axial 30"',
        },
        {
          columns1: 'VIS-1730',
          columns2: '1.135*0.6*1.730',
          columns3: '1.1*0.1*1.15',
          columns4: '10594',
          columns5: '950/0.75',
          columns6: '61 180 Ltr',
          columns7: '2550 sqft',
          columns8: 'Single Phase',
          columns9: 'Axial 30"',
        },
      ]
    }
  ];

  private imageGallery: Images[] = [
    {
      title: 'Rajamane',
      image: [
        '../../assets/images/product/hvls-fan.jpg',
        '../../assets/images/product/cooling-pad.webp',
        '../../assets/images/product/tent-cooler.webp',
      ],
    },
    {
      title: 'Oerlikon',
      image: [
        '../../assets/images/product/turbo-air-ventilator-two.webp',
        '../../assets/images/product/turbo-air-ventilator.webp',
        '../../assets/images/product/exhaust-fan.webp',
        '../../assets/images/product/frp-exhaust-fan.webp',
        '../../assets/images/product/frp-exhaust-fan-two.jpg'
      ],
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
  getImageGallery(): Images[] {
    return this.imageGallery;
  }
}
