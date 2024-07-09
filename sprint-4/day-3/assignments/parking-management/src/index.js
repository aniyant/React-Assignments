"use strict";
// index.ts
// Enum to represent vehicle categories
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory[VehicleCategory["Handicapped"] = 0] = "Handicapped";
    VehicleCategory[VehicleCategory["SmallCar"] = 1] = "SmallCar";
    VehicleCategory[VehicleCategory["LargeVehicle"] = 2] = "LargeVehicle";
})(VehicleCategory || (VehicleCategory = {}));
// Enum to represent different parking slot statuses
var SlotStatus;
(function (SlotStatus) {
    SlotStatus[SlotStatus["Available"] = 0] = "Available";
    SlotStatus[SlotStatus["Occupied"] = 1] = "Occupied";
})(SlotStatus || (SlotStatus = {}));
// Class representing a parking slot
class ParkingSlot {
    constructor(id, category) {
        this.id = id;
        this.category = category;
        this.status = SlotStatus.Available;
    }
    occupySlot(vehicleId, entryTime) {
        this.status = SlotStatus.Occupied;
        this.vehicleId = vehicleId;
        this.entryTime = entryTime;
    }
    vacateSlot() {
        this.status = SlotStatus.Available;
        this.vehicleId = undefined;
        this.entryTime = undefined;
    }
}
// Class representing a vehicle
class Vehicle {
    constructor(id, category, entryTime) {
        this.id = id;
        this.category = category;
        this.entryTime = entryTime;
    }
}
// Class representing a parking floor
class ParkingFloor {
    constructor(id, slots) {
        this.id = id;
        this.slots = slots;
    }
    getAvailableSlots(category) {
        return this.slots.filter(slot => slot.category === category && slot.status === SlotStatus.Available);
    }
    getOccupiedSlots() {
        return this.slots.filter(slot => slot.status === SlotStatus.Occupied);
    }
}
// Class representing the entire parking lot
class ParkingLot {
    constructor(floors, hourlyRates) {
        this.floors = floors;
        this.hourlyRates = hourlyRates;
    }
    parkVehicle(vehicle) {
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
    vacateVehicle(vehicleId, exitTime) {
        for (const floor of this.floors) {
            const slot = floor.slots.find(slot => slot.vehicleId === vehicleId);
            if (slot) {
                const duration = (exitTime.getTime() - slot.entryTime.getTime()) / (1000 * 60 * 60);
                const rate = this.hourlyRates.get(slot.category);
                const amount = duration * rate;
                slot.vacateSlot();
                return `Vehicle vacated from floor ${floor.id}, slot ${slot.id}. Total amount: $${amount.toFixed(2)}`;
            }
        }
        return 'Vehicle not found.';
    }
    getAvailableSlots() {
        const availableSlots = {
            [VehicleCategory.Handicapped]: 0,
            [VehicleCategory.SmallCar]: 0,
            [VehicleCategory.LargeVehicle]: 0
        };
        for (const floor of this.floors) {
            for (const category in availableSlots) {
                availableSlots[category] += floor.getAvailableSlots(parseInt(category)).length;
            }
        }
        return availableSlots;
    }
}
// Initialize the parking lot with sample data
const hourlyRates = new Map([
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
