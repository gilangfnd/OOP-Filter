class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.filterButton = document.getElementById("cari-mobil");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.filterButton.onclick = this.clear;
    // this.filterButton.onclick = this.run;
    this.filterButton.onclick = this.filter;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  // async filter() {
  //   const driver = document.getElementById("tipedriver").value
  //   console.log(driver)
  //   const tanggal = document.getElementById("tanggal").value
  //   console.log(tanggal)
  //   const cars = await Binar.listCars((e) => {
  //     // tambahkan fungsi filter
  //     const td = e.typeDriver === driver;
  //     const te = e.availableAt = tanggal;
      

  //     // return e.typeDriver === driver
  //     return td && te
  //   });
  //   Car.init(cars);
  //   document.getElementById("cars-container").innerHTML = ''
  //   Car.list.forEach((car) => {
  //     const node = document.createElement("div");

  //     node.innerHTML = car.render();
  //     document.getElementById("cars-container").appendChild(node);
  //   });
  // }

  async filter() {
    const driver = document.getElementById("tipedriver").value
    console.log(driver)
    const tanggal = document.getElementById("tanggal").value
    console.log(tanggal)
    const jumlahpenumpang = document.getElementById("jumlahpenumpang").value
    console.log(jumlahpenumpang)
    const waktu = document.getElementById("waktu").value
    console.log(waktu)
    const cars = await Binar.listCars((e) => {
      // tambahkan fungsi filter
      const td = e.typeDriver === driver;
      const pe = e.capacity = jumlahpenumpang;
      const te = e.availableAt = tanggal;
      const wt = e.timeAt = waktu;

      // return e.typeDriver === driver
      return td && pe && te && wt
    });
    Car.init(cars);
    document.getElementById("cars-container").innerHTML = ''
    Car.list.forEach((car) => {
      const node = document.createElement("div");

      node.innerHTML = car.render();
      document.getElementById("cars-container").appendChild(node);
    });
  }

  async load(filter) {
    const cars = await Binar.listCars(filter);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
