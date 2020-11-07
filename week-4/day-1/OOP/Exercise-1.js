class Hero {
    constructor(nama, speed, healthPoint, attackPoint, isDead){
        this.nama = nama;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }
    attack(){
        return `Nah lu rasain nih gua sambit sendal. "Damage increase ${this.attackPoint}"`
    }
    diSundulPocong(){
        return `Attack by Pocong ! HP - 30. "Your HP Now : ${this.healthPoint - 30 } HP"`
    }
    useBandage(){
        return `Using MedKit HP + 30. "Your HP Now : ${this.healthPoint} HP"`
    }
    diColekZombie(){
        return `Attack by Zombie ! HP - 40. "Your HP Now :  ${this.healthPoint - 40} HP"`
    }
    makanNasdang(){
        return `Nasdang + Rendang ! HP + 40. "Your HP Now : ${this.healthPoint} HP"`
    }
}

class Pocong extends Hero{
    jump(){
        return `Ea gua lompatin luu`
    }
    superJump(){
        return `Bye Cyinnnnn`
    }
}

class Zombie extends Hero{
    walk(){
        return `BRAINZZZZZ`
    }
    running(){
        return `BRAINNZZ BRAINZZ BRAINZZZ`
    }
}
// Info 
let pahlawan = new Hero("GUNDALA", 85, 100, 10, false)
let pocong = new Pocong("MUMUN", 40, 100, 5, false)
let zombie = new Zombie("FRANKENSTEIN", 60, 100, 5, false)

// pahlawan
console.log(pahlawan)
console.log(pahlawan.attack())
console.log(pahlawan.diSundulPocong())
console.log(pahlawan.useBandage());
console.log(pahlawan.diColekZombie())
console.log(pahlawan.makanNasdang())

// pocong
console.log(pocong)
console.log(pocong.jump())
console.log(pocong.superJump())

// zombie
console.log(zombie)
console.log(zombie.walk())
console.log(zombie.running())