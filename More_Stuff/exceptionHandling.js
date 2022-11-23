let drivers = ['Max', 'Checo', 'George', 'Lewis', undefined, 'Carlos'];

drivers.forEach(driver => {
    try {
        console.log(`${driver} has won ${driver.length} Grand Prix`);
    } catch (exception) {
        console.log(`Ferrari strategy`);
    }
});