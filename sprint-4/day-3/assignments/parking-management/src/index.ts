// index.ts

// Enum to represent vehicle categories
enum VehicleCategory {
    Handicapped,
    SmallCar,
    LargeVehicle
}

// Enum to represent different parking slot statuses
enum SlotStatus {
    Available,
    Occupied
}

// Interface for a parking slot
interface IParkingSlot {
    id: number;
    category: VehicleCategory;
    status: SlotStatus;
    vehicleId?: string;
    entryTime?: Date;
}

// Interface for a vehicle
interface IVehicle {
    id: string;
    category: VehicleCategory;
    entryTime: Date;
    exitTime?: Date;
}

// Class representing a parking slot
class ParkingSlot implements IParkingSlot {
    id: number;
    category: VehicleCategory;
    status: SlotStatus;
    vehicleId?: string;
    entryTime?: Date;

    constructor(id: number, category: VehicleCategory) {
        this.id = id;
        this.category = category;
        this.status = SlotStatus.Available;
    }

    occupySlot(vehicleId: string, entryTime: Date): void {
        this.status = SlotStatus.Occupied;
        this.vehicleId = vehicleId;
        this.entryTime = entryTime;
    }

    vacateSlot(): void {
        this.status = SlotStatus.Available;
        this.vehicleId = undefined;
        this.entryTime = undefined;
    }
}

// Class representing a vehicle
class Vehicle implements IVehicle {
    id: string;
    category: VehicleCategory;
    entryTime: Date;
    exitTime?: Date;

    constructor(id: string, category: VehicleCategory, entryTime: Date) {
        this.id = id;
        this.category = category;
        this.entryTime = entryTime;
    }
}

// Class representing a parking floor
class ParkingFloor {
    id: number;
    slots: ParkingSlot[];

    constructor(id: number, slots: ParkingSlot[]) {
        this.id = id;
        this.slots = slots;
    }

    getAvailableSlots(category: VehicleCategory): ParkingSlot[] {
        return this.slots.filter(slot => slot.category === category && slot.status === SlotStatus.Available);
    }

    getOccupiedSlots(): ParkingSlot[] {
        return this.slots.filter(slot => slot.status === SlotStatus.Occupied);
    }
}

// Class representing the entire parking lot
class ParkingLot {
    floors: ParkingFloor[];
    hourlyRates: Map<VehicleCategory, number>;

    constructor(floors: ParkingFloor[], hourlyRates: Map<VehicleCategory, number>) {
        this.floors = floors;
        this.hourlyRates = hourlyRates;
    }

    parkVehicle(vehicle: Vehicle): string {
        for (const floor of this.floors) {
            const availableSlots = floor.getAvailableSlots(vehicle.category);
            if (availableSlots.length > 0) {
                const slot = availableSlots[0];
                slot.occupySlot(vehicle.id, vehicle.entryTime);
                return `Vehicle parked in floor ${floor.id}, slot ${slot.id}`;
            }
        }
        return 'No available slots for this vehicle category.';
    }

    vacateVehicle(vehicleId: string, exitTime: Date): string {
        for (const floor of this.floors) {
            const slot = floor.slots.find(slot => slot.vehicleId === vehicleId);
            if (slot) {
                const duration = (exitTime.getTime() - slot.entryTime!.getTime()) / (1000 * 60 * 60);
                const rate = this.hourlyRates.get(slot.category)!;
                const amount = duration * rate;
                slot.vacateSlot();
                return `Vehicle vacated from floor ${floor.id}, slot ${slot.id}. Total amount: $${amount.toFixed(2)}`;
            }
        }
        return 'Vehicle not found.';
    }

    getAvailableSlots(): { [key in VehicleCategory]: number } {
        const availableSlots: { [key in VehicleCategory]: number } = {
            [VehicleCategory.Handicapped]: 0,
            [VehicleCategory.SmallCar]: 0,
            [VehicleCategory.LargeVehicle]: 0
        };

        for (const floor of this.floors) {
            for (const category in availableSlots) {
                availableSlots[category as VehicleCategory] += floor.getAvailableSlots(parseInt(category)).length;
            }
        }

        return availableSlots;
    }
}

// Initialize the parking lot with sample data
const hourlyRates = new Map<VehicleCategory, number>([
    [VehicleCategory.Handicapped, 1],
    [VehicleCategory.SmallCar, 2],
    [VehicleCategory.LargeVehicle, 3]
]);

const floor1 = new ParkingFloor(1, [
    new ParkingSlot(1, VehicleCategory.Handicapped),
    new ParkingSlot(2, VehicleCategory.SmallCar),
    new ParkingSlot(3, VehicleCategory.LargeVehicle)
]);

const floor2 = new ParkingFloor(2, [
    new ParkingSlot(4, VehicleCategory.Handicapped),
    new ParkingSlot(5, VehicleCategory.SmallCar),
    new ParkingSlot(6, VehicleCategory.LargeVehicle)
]);

const parkingLot = new ParkingLot([floor1, floor2], hourlyRates);

// Testing the system
const vehicle1 = new Vehicle("V001", VehicleCategory.SmallCar, new Date());
console.log(parkingLot.parkVehicle(vehicle1));

const vehicle2 = new Vehicle("V002", VehicleCategory.Handicapped, new Date());
console.log(parkingLot.parkVehicle(vehicle2));

console.log(parkingLot.getAvailableSlots());

const exitTime = new Date(new Date().getTime() + 2 * 60 * 60 * 1000); // 2 hours later
console.log(parkingLot.vacateVehicle("V001", exitTime));

console.log(parkingLot.getAvailableSlots());
