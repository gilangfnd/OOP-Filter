class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    typeDriver
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.typeDriver = typeDriver
  }

  render() {
    return `
    <div class="container">
        <div class="row gy-3 my-3">
          <div class="col-3 fill">
            <div class="card h-100">
              <div class="card-body">
                <img class="img-fluid" src="${this.image}" alt="${this.manufacture}">
                <h5><b>${this.manufacture}</b> (<b>${this.model}</b>)</h5>
                <h4><b>Rp. ${this.rentPerDay} /Hari</b></h4>
                <p>Plat Nomer: ${this.plate}</p>
                <p>Tipe Driver: ${this.typeDriver}</p>
                <p>Tersedia Pada: ${this.availableAt}</p>
                <p>${this.description}</p>
                <p>Kapasitas: ${this.capacity} Orang</p>
                <p> ${this.transmission}</p>
                <p>Tahun ${this.year}</p>
                <div class="d-grid gap-2">
                <button class="btn-fluid btn btn-green btn-pilih-mobil"> Pilih Mobil
                </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 fill">
            <div class="card h-100">
              <div class="card-body">
                <img class="img-fluid" src="${this.image}" alt="${this.manufacture}">
                <h5><b>${this.manufacture}</b> (<b>${this.model}</b>)</h5>
                <h4><b>Rp. ${this.rentPerDay} /Hari</b></h4>
                <p>Plat Nomer: ${this.plate}</p>
                <p>Tipe Driver: ${this.typeDriver}</p>
                <p>Tersedia Pada: ${this.availableAt}</p>
                <p>${this.description}</p>
                <p>Kapasitas: ${this.capacity} Orang</p>
                <p> ${this.transmission}</p>
                <p>Tahun ${this.year}</p>
                <div class="d-grid gap-2">
                <button class="btn-fluid btn btn-green btn-pilih-mobil"> Pilih Mobil
                </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 fill">
            <div class="card h-100">
              <div class="card-body">
                <img class="img-fluid" src="${this.image}" alt="${this.manufacture}">
                <h5><b>${this.manufacture}</b> (<b>${this.model}</b>)</h5>
                <h4><b>Rp. ${this.rentPerDay} /Hari</b></h4>
                <p>Plat Nomer: ${this.plate}</p>
                <p>Tipe Driver: ${this.typeDriver}</p>
                <p>Tersedia Pada: ${this.availableAt}</p>
                <p>${this.description}</p>
                <p>Kapasitas: ${this.capacity} Orang</p>
                <p> ${this.transmission}</p>
                <p>Tahun ${this.year}</p>
                <div class="d-grid gap-2">
                <button class="btn-fluid btn btn-green btn-pilih-mobil"> Pilih Mobil
                </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 fill">
            <div class="card h-100">
              <div class="card-body">
                <img class="img-fluid" src="${this.image}" alt="${this.manufacture}">
                <h5><b>${this.manufacture}</b> (<b>${this.model}</b>)</h5>
                <h4><b>Rp. ${this.rentPerDay} /Hari</b></h4>
                <p>Plat Nomer: ${this.plate}</p>
                <p>Tipe Driver: ${this.typeDriver}</p>
                <p>Tersedia Pada: ${this.availableAt}</p>
                <p>${this.description}</p>
                <p>Kapasitas: ${this.capacity} Orang</p>
                <p> ${this.transmission}</p>
                <p>Tahun ${this.year}</p>
                <div class="d-grid gap-2">
                <button class="btn-fluid btn btn-green btn-pilih-mobil"> Pilih Mobil
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>`;
  }
} 
//   render() {
//     return `
//       <div>id: <b>${this.id}</b></p>
//       <p>plate: <b>${this.plate}</b></p>
//       <p>manufacture: <b>${this.manufacture}</b></p>
//       <p>model: <b>${this.model}</b></p>
//       <p>type driver: <b>${this.typeDriver}</b></p>
//       <p>available at: <b>${this.availableAt}</b></p>
//       <img src="${this.image}" alt="${this.manufacture}" width="64px">
//     `;
//   }
// }
