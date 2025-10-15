import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const modules = [
    {
      icon: "Map",
      title: "Модуль 1: Диагностика. Карта вашего Рода",
      description: "Выявите конкретные деструктивные программы, которые блокируют денежный поток и личное счастье. Определите, какие установки вам мешают, а какие ресурсные таланты — вы не забираете."
    },
    {
      icon: "Sparkles",
      title: "Модуль 2: Очищение. Разрыв Соглашений",
      description: "Техники освобождения от груза родовых обид, долгов и проклятий. Закрытие энергетических «утечек», через которые уходят ваши силы и деньги."
    },
    {
      icon: "Crown",
      title: "Модуль 3: Наследование Силы. Принятие Даров",
      description: "Научитесь забирать ту силу, мудрость и капиталы, которые накоплены в вашем Роду. Активируете свой истинный, а не навязанный, потенциал."
    },
    {
      icon: "Zap",
      title: "Модуль 4: Инсталляция Нового Кода. Закладка Фундамента",
      description: "Заложите новый, процветающий сценарий для себя и своих потомков. Сформулируете и «впечатаете» в свое поле намерение на изобилие, легкие деньги и счастливые отношения."
    }
  ];

  const benefits = [
    "Чувство невероятной легкости и ясности, как будто с плеч свалился многолетний груз",
    "Прорыв в финансах: уйдут блоки, и вы начнете видеть и притягивать новые денежные возможности",
    "Гармонию в отношениях: вы перестанете притягивать токсичных партнеров и начнете выстраивать здоровые связи",
    "Прилив энергии и жизненных сил, потому что вы перестанете тратить их на питание старых родовых драм",
    "Уверенность, что теперь ваша жизнь — в ваших руках, а не в плену у чужого сценария"
  ];

  const targetAudience = [
    "Хотите навсегда разорвать порочный круг «работаю много, а денег нет»",
    "Чувствуете, что повторяете сценарии родителей (в отношениях, деньгах, здоровье)",
    "Готовы взять ответственность за свою жизнь и прекратить передавать ограничения своим детям",
    "Понимаете: чтобы изменить будущее, нужно исцелить прошлое"
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <div 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/b08cd85e-1453-4185-a722-36d1ada4f8b7/files/820e943a-6348-4651-a94c-01afb5256650.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/75 to-primary/85"></div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center text-accent">
            <div className="mb-10 flex justify-center items-center gap-6">
              <div className="text-4xl animate-pulse">☽</div>
              <div className="text-6xl">✦</div>
              <div className="text-4xl animate-pulse">☾</div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              ПРАКТИКУМ<br/>
              <span className="text-6xl md:text-8xl lg:text-9xl">«КОД РОДА:</span><br/>
              <span className="text-4xl md:text-6xl lg:text-7xl font-light">наследие предков»</span>
            </h1>
            
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-10"></div>
            
            <p className="text-2xl md:text-4xl mb-8 font-semibold leading-relaxed">
              Прервите Цепь Родовых Ограничений
            </p>
            
            <p className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Используйте Ноябрь — Единственное Время в Году, Когда Грань Миров Истончена, 
              Чтобы Переписать Свой Сценарий на Изобилие
            </p>
            
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary px-12 py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300 shadow-2xl hover:scale-110"
            >
              Забронировать место по лучшей цене
            </Button>
          </div>
        </div>
      </div>

      <section className="py-24 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6 text-accent">✧</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-accent">
              Вам знакомо это чувство?
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-accent/90">
              Вы вкладываете силы, а ваша жизнь все равно напоминает бег по замкнутому кругу?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-secondary/30 border-accent/40 backdrop-blur-sm hover:border-accent transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Icon name="DollarSign" className="w-16 h-16 mx-auto mb-6 text-accent" />
                <p className="text-lg leading-relaxed text-card-foreground">Выкладываетесь на работе, а денег вечно «в обрез»?</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/30 border-accent/40 backdrop-blur-sm hover:border-accent transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Icon name="Heart" className="w-16 h-16 mx-auto mb-6 text-accent" />
                <p className="text-lg leading-relaxed text-card-foreground">Построить счастливые отношения будто что-то невидимое мешает?</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/30 border-accent/40 backdrop-blur-sm hover:border-accent transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Icon name="Weight" className="w-16 h-16 mx-auto mb-6 text-accent" />
                <p className="text-lg leading-relaxed text-card-foreground">Чувствуете необъяснимую тяжесть, усталость и будто «тащите на себе воз» проблем, которые не ваши?</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-secondary/40 border-accent/50 backdrop-blur">
            <CardContent className="p-10 text-center">
              <p className="text-2xl md:text-3xl font-bold mb-6 text-accent">Стоп! Возможно, вы просто исполняете не свой сценарий.</p>
              <p className="text-xl md:text-2xl leading-relaxed text-card-foreground">
                Вы живете по родовой программе, в которой прописаны ваши финансовый потолок, 
                модели отношений и уровень счастья.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="text-5xl mb-8 animate-pulse text-accent">◈</div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-10">
              Уникальное Окно Возможностей
            </h2>
          </div>
          
          <Card className="bg-primary/95 border-accent/40">
            <CardContent className="p-10 space-y-8 text-lg md:text-xl leading-relaxed text-accent">
              <p className="text-2xl font-semibold text-center">
                Что, если есть способ это изменить? И для этого уже есть конкретная дата в календаре.
              </p>
              
              <div className="text-center py-8">
                <div className="inline-block border-4 border-accent rounded-lg p-8">
                  <p className="text-5xl md:text-6xl font-bold mb-2">НОЯБРЬ</p>
                </div>
              </div>
              
              <p>
                В это время грань между мирами становится тонкой как никогда. Это не мистика, 
                а уникальная энергетическая реальность. Единственный период в году, когда можно 
                не просто вспомнить предков, а провести глубинную «перепрошивку» родового кода, 
                достучаться до истока проблем и превратить родовые проклятия в ресурсы.
              </p>
              
              <div className="bg-secondary/40 rounded-lg p-8 border-2 border-accent/50">
                <p className="text-2xl italic text-center leading-relaxed">
                  Представьте, что вы нашли ключ от кладовой, где хранятся все ваши заблокированные 
                  таланты, сила и право на изобилие. Ноябрь — и есть этот ключ.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-primary/90 border-accent/40">
            <CardContent className="p-10 space-y-8 text-accent">
              <div className="text-center mb-8">
                <div className="text-5xl mb-6">✦</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Практикум «Код Рода»
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed">
                  Это ваш шанс войти в эти врата с проводником и выйти из них обновленным, 
                  с новым кодом процветания.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                  Этот практикум для вас, если вы:
                </h3>
                
                {targetAudience.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-secondary/30 p-6 rounded-lg border border-accent/30">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <p className="text-lg leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Программа Практикума
            </h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              За месяц глубокой трансформации вы сделаете то, что не сможете сделать в другое время года
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gradient-to-br from-secondary/40 to-primary/30 border-accent/40 backdrop-blur hover:border-accent transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
                      <Icon name={module.icon} className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-accent mb-4 leading-tight">{module.title}</h3>
                      <p className="text-card-foreground leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-5xl mb-8 text-accent">✧</div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Ваш Результат После Практикума
            </h2>
            <p className="text-xl md:text-2xl text-foreground">
              Что вы заберете с собой, завершив практикум:
            </p>
          </div>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-card hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <p className="text-foreground font-medium text-lg md:text-xl leading-relaxed pt-2">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-primary to-primary/95">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-accent/50 rounded-2xl blur-xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/b08cd85e-1453-4185-a722-36d1ada4f8b7/files/c51e2859-bdcb-454e-80bd-6480681a7641.jpg" 
                  alt="Яра Белова" 
                  className="rounded-2xl shadow-2xl w-full relative border-4 border-accent/50"
                />
              </div>
            </div>
            
            <div className="lg:w-3/5 text-accent">
              <div className="text-4xl mb-6">✦</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ваш Проводник
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p className="text-3xl font-bold text-accent/95">Яра Белова</p>
                
                <p>
                  Проводник в Новую Реальность, энергопрактик, наставник, целитель.
                </p>
                
                <p>
                  Более <span className="font-bold text-accent/95 text-2xl">11 лет</span> я помогаю людям 
                  освобождаться от ограничивающих сценариев и выходить на новый уровень жизни.
                </p>
                
                <div className="bg-secondary/40 border-l-4 border-accent rounded-r-lg p-6">
                  <p className="italic text-xl">
                    Я создала этот практикум, чтобы вы могли использовать это сакральное время 
                    с максимальной пользой и наконец-то начали жить своей — по-настоящему 
                    счастливой и изобильной — жизнью.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-6xl mb-8">🎁</div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
              Бонусы для Ранних Участников
            </h2>
            <div className="bg-primary text-accent inline-block px-8 py-4 rounded-full text-xl md:text-2xl font-bold mb-6">
              🔥 Ранняя цена действует только до 21 октября!
            </div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              В качестве бонуса все участники, забронировавшие место до 21 октября, получат:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-primary/95 border-accent/50 hover:scale-105 transition-all duration-300">
              <CardContent className="p-10 text-center text-accent">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
                  <Icon name="Headphones" className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Бонус 1</h3>
                <p className="text-lg md:text-xl leading-relaxed">
                  Проводящая медитация «Диалог с Хранителем Рода»
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/95 border-accent/50 hover:scale-105 transition-all duration-300">
              <CardContent className="p-10 text-center text-accent">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
                  <Icon name="FileText" className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Бонус 2</h3>
                <p className="text-lg md:text-xl leading-relaxed">
                  ПДФ-памятка «Экспресс-техники наполнения утром и вечером»
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
              Формат Участия: «Полное Погружение»
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 text-foreground">
              Мы убрали все лишнее и создали для вас максимально целостный и поддерживающий формат, 
              где есть всё для результата
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-secondary/40 to-primary/30 border-accent/40">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <Icon name="BookOpen" className="w-16 h-16 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-accent">Доступ к закрытому каналу знаний</h3>
                    <p className="text-lg leading-relaxed text-card-foreground">
                      Все уроки и практики будут ждать вас в одном месте. Смотрите в удобном темпе без ограничений по времени.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/40 to-primary/30 border-accent/40">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <Icon name="MessageCircle" className="w-16 h-16 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-accent">Чат поддержки со мной</h3>
                    <p className="text-lg leading-relaxed text-card-foreground">
                      Вы не останетесь один на один с трансформацией. Задавайте вопросы, делитесь инсайтами и получайте обратную связь в кругу единомышленников.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-primary/98 border-accent/60 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-accent/70 to-accent"></div>
            
            <CardContent className="p-12 md:p-16 text-center text-accent">
              <div className="text-6xl md:text-7xl mb-10">✦</div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Врата Открыты Ненадолго
              </h2>
              
              <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
                Не упустите единственный шанс в году переписать код вашего Рода на код Изобилия
              </p>
              
              <div className="bg-secondary/50 rounded-2xl p-10 mb-10 border-2 border-accent/50">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <p className="text-sm uppercase tracking-wider mb-3 text-accent/70 font-semibold">Старт практикума</p>
                    <p className="text-4xl md:text-5xl font-bold">31 октября</p>
                  </div>
                  
                  <div className="text-left">
                    <p className="text-sm uppercase tracking-wider mb-3 text-accent/70 font-semibold">Инвестиция</p>
                    <p className="text-4xl md:text-5xl font-bold">35 000 ₽</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="bg-accent hover:bg-accent/90 text-primary px-16 py-8 text-xl md:text-2xl font-bold rounded-full transition-all duration-300 shadow-2xl hover:scale-110 w-full md:w-auto mb-8"
              >
                Забронировать место и получить бонусы ПРЯМО СЕЙЧАС
              </Button>
              
              <p className="text-sm mt-8 text-accent/60 italic">
                Количество участников ограничено для максимального внимания каждому
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-primary text-accent/70 text-center border-t-2 border-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-3xl mb-6">✧</div>
          <p className="text-lg">© 2024 Практикум «Код Рода». Яра Белова</p>
          <p className="text-sm mt-4">Трансформация через древние знания</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;