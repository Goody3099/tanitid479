import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ContentPageItem {
  name: string;
  description: string;
  imageUrl: string;
  email?: string;
  phone?: string;
  address?: string;
  reservation?: boolean;
  type: string;
  category: 'Food' | 'Lodging' | 'Entertainment' | 'Transportation';
}

@Component({
  selector: 'app-content-page',
  standalone: true,
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  items: ContentPageItem[] = [
    {
      name: 'Restaurant A',
      description: 'Description of Restaurant A',
      imageUrl: 'assets/images/restaurantA.jpg',
      email: 'contact@restaurantA.com',
      phone: '+1-234-567-8901',
      address: '123 Food St, Tasty Town',
      reservation: true,
      type: 'Restaurant',
      category: 'Food'
    },
    {
      name: 'Restaurant B',
      description: 'Description of Restaurant B',
      imageUrl: 'assets/images/restaurantB.jpg',
      email: 'contact@restaurantB.com',
      phone: '+1-234-567-8902',
      address: '456 Meal Ave, Gourmet City',
      reservation: true,
      type: 'Restaurant',
      category: 'Food'
    },
    {
      name: 'Market A',
      description: 'Description of Market A',
      imageUrl: 'assets/images/marketA.jpg',
      email: 'info@marketA.com',
      phone: '+1-234-567-8903',
      address: '789 Market Rd, Freshville',
      reservation: false,
      type: 'Market',
      category: 'Food'
    },
    {
      name: 'Market B',
      description: 'Description of Market B',
      imageUrl: 'assets/images/marketB.jpg',
      email: 'info@marketB.com',
      phone: '+1-234-567-8904',
      address: '101 Commerce St, Veggie Valley',
      reservation: false,
      type: 'Market',
      category: 'Food'
    },
    {
      name: 'Grocery Store A',
      description: 'Description of Grocery Store A',
      imageUrl: 'assets/images/groceryStoreA.jpg',
      email: 'support@groceryStoreA.com',
      phone: '+1-234-567-8905',
      address: '202 Grocery Blvd, Foodland',
      reservation: false,
      type: 'Grocery Store',
      category: 'Food'
    },
    {
      name: 'Grocery Store B',
      description: 'Description of Grocery Store B',
      imageUrl: 'assets/images/groceryStoreB.jpg',
      email: 'support@groceryStoreB.com',
      phone: '+1-234-567-8906',
      address: '303 Grocery Dr, Supplierville',
      reservation: false,
      type: 'Grocery Store',
      category: 'Food'
    },
    {
      name: 'Restaurant C',
      description: 'Description of Restaurant C',
      imageUrl: 'assets/images/restaurantA.jpg',
      email: 'contact@restaurantC.com',
      phone: '+1-234-567-8907',
      address: '404 Culinary Ln, Delicacy District',
      reservation: true,
      type: 'Restaurant',
      category: 'Food'
    },
    {
      name: 'Restaurant D',
      description: 'Description of Restaurant D',
      imageUrl: 'assets/images/restaurantB.jpg',
      email: 'contact@restaurantD.com',
      phone: '+1-234-567-8908',
      address: '505 Feast Rd, Savory City',
      reservation: true,
      type: 'Restaurant',
      category: 'Food'
    },
    {
      name: 'Market C',
      description: 'Description of Market C',
      imageUrl: 'assets/images/marketA.jpg',
      email: 'info@marketC.com',
      phone: '+1-234-567-8909',
      address: '606 Trade Blvd, Shopville',
      reservation: false,
      type: 'Market',
      category: 'Food'
    },
    {
      name: 'Market D',
      description: 'Description of Market D',
      imageUrl: 'assets/images/marketB.jpg',
      email: 'info@marketD.com',
      phone: '+1-234-567-8910',
      address: '707 Commerce Ave, Greenfield',
      reservation: false,
      type: 'Market',
      category: 'Food'
    },
    {
      name: 'Grocery Store C',
      description: 'Description of Grocery Store C',
      imageUrl: 'assets/images/groceryStoreA.jpg',
      email: 'support@groceryStoreC.com',
      phone: '+1-234-567-8911',
      address: '808 Market St, Organicville',
      reservation: false,
      type: 'Grocery Store',
      category: 'Food'
    },
    {
      name: 'Grocery Store D',
      description: 'Description of Grocery Store D',
      imageUrl: 'assets/images/groceryStoreB.jpg',
      email: 'support@groceryStoreD.com',
      phone: '+1-234-567-8912',
      address: '909 Food Rd, Supplies City',
      reservation: false,
      type: 'Grocery Store',
      category: 'Food'
    },
    {
      name: 'Cafe A',
      description: 'Description of Cafe A',
      imageUrl: 'assets/images/restaurantA.jpg',
      email: 'info@cafeA.com',
      phone: '+1-234-567-8913',
      address: '1010 Cafe Blvd, Java Town',
      reservation: false,
      type: 'Cafe',
      category: 'Food'
    },
    {
      name: 'Cafe B',
      description: 'Description of Cafe B',
      imageUrl: 'assets/images/restaurantB.jpg',
      email: 'info@cafeB.com',
      phone: '+1-234-567-8914',
      address: '1111 Brew St, Beanville',
      reservation: false,
      type: 'Cafe',
      category: 'Food'
    },
    { 
      name: 'Fishing', 
      description: 'Experience a day of fishing in the crystal-clear waters of Taniti.',
      imageUrl: 'assets/images/fishing.jpg', 
      email: 'info@fishingtaniti.com',
      phone: '+1-234-567-8901',
      address: '123 Ocean View, Taniti',
      reservation: true,
      type: 'Fishing',
      category: 'Entertainment'
    },
    { 
      name: 'Museum', 
      description: 'Explore the rich history and culture of Taniti at the local museum.',
      imageUrl: 'assets/images/museum.jpg', 
      email: 'contact@museumtaniti.com',
      phone: '+1-234-567-8902',
      address: '456 Heritage Lane, Taniti',
      reservation: false,
      type: 'Museum',
      category: 'Entertainment'
    },
    { 
      name: 'Rainforest', 
      description: 'Discover the lush rainforest and its unique flora and fauna.',
      imageUrl: 'assets/images/rainforest.jpg', 
      email: 'info@rainforesttaniti.com',
      phone: '+1-234-567-8903',
      address: '789 Jungle Road, Taniti',
      reservation: false,
      type: 'Rainforest',
      category: 'Entertainment'
    },
    { 
      name: 'Ziplining', 
      description: 'Enjoy an exhilarating ziplining adventure through the treetops.',
      imageUrl: 'assets/images/zipLining.jpg', 
      email: 'adventures@ziplinetaniti.com',
      phone: '+1-234-567-8904',
      address: '101 Adventure Park, Taniti',
      reservation: true,
      type: 'Ziplining',
      category: 'Entertainment'
    },
    { 
      name: 'Volcano', 
      description: 'Visit the majestic volcano and take in the breathtaking views.',
      imageUrl: 'assets/images/volcano.jpg', 
      email: 'info@volcanotaniti.com',
      phone: '+1-234-567-8905',
      address: '202 Lava Drive, Taniti',
      reservation: false,
      type: 'Volcano',
      category: 'Entertainment'
    },
    { 
      name: 'Snorkeling', 
      description: 'Explore the vibrant underwater world with our snorkeling tours.',
      imageUrl: 'assets/images/snorkeling.jpg', 
      email: 'contact@snorkelingtaniti.com',
      phone: '+1-234-567-8906',
      address: '303 Coral Beach, Taniti',
      reservation: true,
      type: 'Snorkeling',
      category: 'Entertainment'
    },
    { 
      name: 'Night Life', 
      description: 'Experience the vibrant night life with clubs, bars, and live music.',
      imageUrl: 'assets/images/nightLifeA.jpg', 
      email: 'info@nightlifetaniti.com',
      phone: '+1-234-567-8907',
      address: '404 Party Street, Taniti',
      reservation: false,
      type: 'Night Life',
      category: 'Entertainment'
    },
    { 
      name: 'Beach Volleyball', 
      description: 'Join a game of beach volleyball on the sunny shores of Taniti.',
      imageUrl: 'assets/images/beachVolleyball.jpg', 
      email: 'contact@beachvolleyballtaniti.com',
      phone: '+1-234-567-8908',
      address: '505 Beachfront, Taniti',
      reservation: false,
      type: 'Beach Volleyball',
      category: 'Entertainment'
    },
    { 
      name: 'Local Festivals', 
      description: 'Participate in local festivals showcasing traditional music and dance.',
      imageUrl: 'assets/images/localFestivals.jpg', 
      email: 'info@localfestivalstaniti.com',
      phone: '+1-234-567-8909',
      address: '606 Festival Grounds, Taniti',
      reservation: true,
      type: 'Local Festivals',
      category: 'Entertainment'
    },
    { 
      name: 'Horseback Riding', 
      description: 'Enjoy a scenic horseback ride through the picturesque landscapes.',
      imageUrl: 'assets/images/horsebackRiding.jpg', 
      email: 'contact@horsebackridingtaniti.com',
      phone: '+1-234-567-8910',
      address: '707 Equestrian Center, Taniti',
      reservation: true,
      type: 'Horseback Riding',
      category: 'Entertainment'
    },
    { 
      name: 'Cooking Classes', 
      description: 'Learn to cook traditional Taniti dishes with local chefs.',
      imageUrl: 'assets/images/cookingClasses.jpg', 
      email: 'info@cookingclasstaniti.com',
      phone: '+1-234-567-8911',
      address: '808 Culinary School, Taniti',
      reservation: true,
      type: 'Cooking Classes',
      category: 'Entertainment'
    },
    { 
      name: 'Public Bus', 
      description: 'Reliable public transportation.', 
      imageUrl: 'assets/images/publicBus.jpg', 
      email: 'info@publicbus.com', 
      phone: '+1-234-567-8901', 
      address: '123 Bus Stop, Transit City', 
      reservation: false, 
      type: 'Public Bus',
      category: 'Transportation'
    },
    { 
      name: 'Rental Car A', 
      description: 'Comfortable rental car for your travels.', 
      imageUrl: 'assets/images/rentalCarA.jpg', 
      email: 'contact@rentalcara.com', 
      phone: '+1-234-567-8902', 
      address: '456 Car Rental Ave, Drive Town', 
      reservation: true, 
      type: 'Rental Car',
      category: 'Transportation'
    },
    { 
      name: 'Rental Car B', 
      description: 'Another option for rental car.', 
      imageUrl: 'assets/images/rentalCarB.jpg', 
      email: 'contact@rentalcarb.com', 
      phone: '+1-234-567-8903', 
      address: '789 Rent St, Vehicle Village', 
      reservation: true, 
      type: 'Rental Car',
      category: 'Transportation'
    },
    { 
      name: 'Taxi A', 
      description: 'Fast and reliable taxi service.', 
      imageUrl: 'assets/images/taxiA.jpg', 
      email: 'info@taxia.com', 
      phone: '+1-234-567-8904', 
      address: '101 Taxi Stand, Cab City', 
      reservation: false, 
      type: 'Taxi',
      category: 'Transportation'
    },
    { 
      name: 'Taxi B', 
      description: 'Another taxi service option.', 
      imageUrl: 'assets/images/taxiB.jpg', 
      email: 'info@taxib.com', 
      phone: '+1-234-567-8905', 
      address: '202 Cab Lane, Transport Town', 
      reservation: false, 
      type: 'Taxi',
      category: 'Transportation'
    },
    { 
      name: 'Public Bus B', 
      description: 'Additional public bus service.', 
      imageUrl: 'assets/images/publicBus.jpg', 
      email: 'info@publicbusb.com', 
      phone: '+1-234-567-8906', 
      address: '303 Bus Stop, Metro City', 
      reservation: false, 
      type: 'Public Bus',
      category: 'Transportation'
    },
    { 
      name: 'Rental Car C', 
      description: 'Premium rental car option.', 
      imageUrl: 'assets/images/rentalCarA.jpg', 
      email: 'contact@rentalcarc.com', 
      phone: '+1-234-567-8907', 
      address: '404 Luxury Ave, Drive Town', 
      reservation: true, 
      type: 'Rental Car',
      category: 'Transportation'
    },
    { 
      name: 'Rental Car D', 
      description: 'Economy rental car option.', 
      imageUrl: 'assets/images/rentalCarB.jpg', 
      email: 'contact@rentalcard.com', 
      phone: '+1-234-567-8908', 
      address: '505 Economy Blvd, Vehicle Village', 
      reservation: true, 
      type: 'Rental Car',
      category: 'Transportation'
    },
    { 
      name: 'Taxi C', 
      description: 'Convenient taxi service.', 
      imageUrl: 'assets/images/taxiA.jpg', 
      email: 'info@taxic.com', 
      phone: '+1-234-567-8909', 
      address: '606 Central Ave, Cab City', 
      reservation: false, 
      type: 'Taxi',
      category: 'Transportation'
    },
    { 
      name: 'Taxi D', 
      description: 'Late-night taxi service.', 
      imageUrl: 'assets/images/taxiB.jpg', 
      email: 'info@taxid.com', 
      phone: '+1-234-567-8910', 
      address: '707 Night St, Transport Town', 
      reservation: false, 
      type: 'Taxi',
      category: 'Transportation'
    },
    { 
      name: 'Public Bus C', 
      description: 'Expanded public bus service.', 
      imageUrl: 'assets/images/publicBus.jpg', 
      email: 'info@publicbusc.com', 
      phone: '+1-234-567-8911', 
      address: '808 Bus Lane, Metro City', 
      reservation: false, 
      type: 'Public Bus',
      category: 'Transportation'
    },
    { 
      name: 'Hostel A', 
      description: 'Description of Hostel A', 
      imageUrl: 'assets/images/hostelA.jpg', 
      email: 'contact@hostelA.com', 
      phone: '+1-234-567-8901', 
      address: '101 Hostel Rd, Backpacker City', 
      reservation: true, 
      type: 'Hostel',
      category: 'Lodging'
    },
    { 
      name: 'Hostel B', 
      description: 'Description of Hostel B', 
      imageUrl: 'assets/images/hostelB.jpg', 
      email: 'contact@hostelB.com', 
      phone: '+1-234-567-8902', 
      address: '202 Hostel Ave, Adventure Town', 
      reservation: true, 
      type: 'Hostel',
      category: 'Lodging'
    },
    { 
      name: 'Hotel A', 
      description: 'Description of Hotel A', 
      imageUrl: 'assets/images/hotelA.jpg', 
      email: 'info@hotelA.com', 
      phone: '+1-234-567-8903', 
      address: '303 Hotel Blvd, Luxury City', 
      reservation: true, 
      type: 'Hotel',
      category: 'Lodging'
    },
    { 
      name: 'Hotel B', 
      description: 'Description of Hotel B', 
      imageUrl: 'assets/images/hotelB.jpg', 
      email: 'info@hotelB.com', 
      phone: '+1-234-567-8904', 
      address: '404 Hotel St, Comfort Zone', 
      reservation: true, 
      type: 'Hotel',
      category: 'Lodging'
    },
    { 
      name: 'Resort A', 
      description: 'Description of Resort A', 
      imageUrl: 'assets/images/resortA.jpg', 
      email: 'contact@resortA.com', 
      phone: '+1-234-567-8905', 
      address: '505 Resort Rd, Paradise Island', 
      reservation: true, 
      type: 'Resort',
      category: 'Lodging'
    },
    { 
      name: 'Resort B', 
      description: 'Description of Resort B', 
      imageUrl: 'assets/images/resortB.jpg', 
      email: 'contact@resortB.com', 
      phone: '+1-234-567-8906', 
      address: '606 Resort Dr, Tranquil Beach', 
      reservation: true, 
      type: 'Resort',
      category: 'Lodging'
    },
    { 
      name: 'Bed and Breakfast A', 
      description: 'Description of Bed and Breakfast A', 
      imageUrl: 'assets/images/bedAndBreakfastA.jpg', 
      email: 'contact@bedAndBreakfastA.com', 
      phone: '+1-234-567-8907', 
      address: '707 B&B St, Cozy Corner', 
      reservation: true, 
      type: 'Bed and Breakfast',
      category: 'Lodging'
    },
    { 
      name: 'Bed and Breakfast B', 
      description: 'Description of Bed and Breakfast B', 
      imageUrl: 'assets/images/bedAndBreakfastB.jpg', 
      email: 'contact@bedAndBreakfastB.com', 
      phone: '+1-234-567-8908', 
      address: '808 B&B Ave, Homely Haven', 
      reservation: true, 
      type: 'Bed and Breakfast',
      category: 'Lodging'
    }      
  ];

  filteredItems: ContentPageItem[] = [];
  currentCategory: string = '';
  typesByCategory: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category && category !== this.currentCategory) {
        this.currentCategory = category;
        this.updateFilteredItems(category);
      }
    });
  }

  public updateFilteredItems(category: string): void {
    this.filteredItems = this.items.filter(item => item.category === category);
    this.updateTypesByCategory(this.filteredItems);
  }

  private updateTypesByCategory(fis: ContentPageItem[]): void {
    this.typesByCategory = [];
    fis.forEach((fi) => {
      if (!this.typesByCategory?.includes(fi.type)){
        this.typesByCategory?.push(fi.type);
      }
    })
    this.typesByCategory.sort((a, b) => a.localeCompare(b));
  }

  public removeByTypeFromFilteredList(typeToKeep: string, category: string): void {
    this.updateFilteredItems(category);
    this.filteredItems = this.filteredItems.filter(x => x.type === typeToKeep);
  }

  public getDetails(item: ContentPageItem) {
    if (item) {
      this.router.navigate(['/details', item.name], {
        queryParams: {
          description: item.description,
          email: item.email,
          phone: item.phone,
          address: item.address,
          reservation: item.reservation,
          imageUrl: item.imageUrl,
          type: item.type,
        }
      });
    }
  }
}
