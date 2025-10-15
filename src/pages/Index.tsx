import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const modules = [
    {
      icon: "Map",
      title: "Диагностика. Карта вашего Рода",
      description: "Выявите конкретные деструктивные программы, которые блокируют денежный поток и личное счастье. Определите, какие установки вам мешают, а какие ресурсные таланты — вы не забираете."
    },
    {
      icon: "Sparkles",
      title: "Очищение. Разрыв Соглашений",
      description: "Техники освобождения от груза родовых обид, долгов и проклятий. Закрытие энергетических «утечек», через которые уходят ваши силы и деньги."
    },
    {
      icon: "Crown",
      title: "Наследование Силы. Принятие Даров",
      description: "Научитесь забирать ту силу, мудрость и капиталы, которые накоплены в вашем Роду. Активируете свой истинный, а не навязанный, потенциал."
    },
    {
      icon: "Zap",
      title: "Инсталляция Нового Кода",
      description: "Заложите новый, процветающий сценарий для себя и своих потомков. Сформулируете и «впечатаете» в свое поле намерение на изобилие."
    }
  ];

  const benefits = [
    { icon: "Heart", text: "Чувство невероятной легкости и ясности" },
    { icon: "TrendingUp", text: "Прорыв в финансах и новые возможности" },
    { icon: "Users", text: "Гармония в отношениях" },
    { icon: "Battery", text: "Прилив энергии и жизненных сил" },
    { icon: "Shield", text: "Уверенность в контроле над своей жизнью" }
  ];

  const bonuses = [
    {
      icon: "Headphones",
      title: "Бонус 1",
      description: "Проводящая медитация «Диалог с Хранителем Рода»"
    },
    {
      icon: "FileText",
      title: "Бонус 2",
      description: "ПДФ-памятка «Экспресс-техники наполнения утром и вечером»"
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8C170] via-[#D4A574] to-[#C1665A]">
      <div 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/b08cd85e-1453-4185-a722-36d1ada4f8b7/files/820e943a-6348-4651-a94c-01afb5256650.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#6B1F3A]/40 via-[#6B1F3A]/60 to-[#6B1F3A]/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-[#E8C170]">
            <div className="mb-8 flex justify-center">
              <div className="text-6xl">✦</div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ПРАКТИКУМ<br/>«КОД РОДА:<br/>наследие предков»
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#E8C170] to-transparent mx-auto mb-8"></div>
            
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Прервите Цепь Родовых Ограничений
            </p>
            
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Используйте Ноябрь — Единственное Время в Году, Когда Грань Миров Истончена, 
              Чтобы Переписать Свой Сценарий на Изобилие
            </p>
            
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-[#C1665A] hover:bg-[#6B1F3A] text-[#E8C170] px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-[#E8C170]/20 hover:scale-105"
            >
              Забронировать место по лучшей цене
            </Button>
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#2A2420]/95 text-[#E8C170]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Вам знакомо это чувство?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-center mb-8">
              Вы вкладываете силы, а ваша жизнь все равно напоминает бег по замкнутому кругу?
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[#6B1F3A]/30 border-[#C1665A]/50 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <Icon name="DollarSign" className="w-12 h-12 mx-auto mb-4 text-[#E8C170]" />
                  <p>Выкладываетесь на работе, а денег вечно «в обрез»?</p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#6B1F3A]/30 border-[#C1665A]/50 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <Icon name="Heart" className="w-12 h-12 mx-auto mb-4 text-[#E8C170]" />
                  <p>Построить счастливые отношения будто что-то невидимое мешает?</p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#6B1F3A]/30 border-[#C1665A]/50 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <Icon name="Weight" className="w-12 h-12 mx-auto mb-4 text-[#E8C170]" />
                  <p>Чувствуете необъяснимую тяжесть и будто «тащите на себе воз» проблем?</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12 p-8 bg-[#C1665A]/20 rounded-lg border-2 border-[#E8C170]/30">
              <p className="text-2xl font-bold mb-4">Стоп! Возможно, вы просто исполняете не свой сценарий.</p>
              <p className="text-xl">
                Вы живете по родовой программе, в которой прописаны ваш финансовый потолок, 
                модели отношений и уровень счастья.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#D4A574] to-[#C1665A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-4xl mb-6">✧</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A2420] mb-8">
              Уникальное Окно Возможностей
            </h2>
          </div>
          
          <Card className="bg-[#2A2420]/90 border-[#E8C170]/30 text-[#E8C170] p-8 mb-8">
            <CardContent className="space-y-6 text-lg leading-relaxed">
              <p className="text-xl font-semibold text-center">
                Что, если есть способ это изменить? И для этого уже есть конкретная дата в календаре.
              </p>
              
              <div className="text-center py-6">
                <p className="text-3xl font-bold mb-4">НОЯБРЬ</p>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E8C170] to-transparent mx-auto"></div>
              </div>
              
              <p>
                В это время грань между мирами становится тонкой как никогда. Это не мистика, 
                а уникальная энергетическая реальность. Единственный период в году, когда можно 
                не просто вспомнить предков, а провести глубинную «перепрошивку» родового кода.
              </p>
              
              <p className="text-center text-xl italic">
                Представьте, что вы нашли ключ от кладовой, где хранятся все ваши заблокированные 
                таланты, сила и право на изобилие. Ноябрь — и есть этот ключ.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-[#2A2420] text-[#E8C170]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Программа Практикума
            </h2>
            <p className="text-xl">
              За месяц глубокой трансформации вы сделаете то, что не сможете сделать в другое время года
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#6B1F3A]/40 to-[#C1665A]/40 border-[#E8C170]/30 backdrop-blur hover:border-[#E8C170] transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon name={module.icon} className="w-12 h-12 text-[#E8C170]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                      <p className="text-[#E8C170]/90 leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#C1665A] to-[#D4A574]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-4xl mb-6">✦</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A2420] mb-8">
              Ваш Результат После Практикума
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-[#E8C170]/90 border-[#2A2420]/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name={benefit.icon} className="w-8 h-8 text-[#6B1F3A] flex-shrink-0" />
                  <p className="text-[#2A2420] font-medium text-lg">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2A2420]/95 text-[#E8C170]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <img 
                src="https://cdn.poehali.dev/projects/b08cd85e-1453-4185-a722-36d1ada4f8b7/files/c51e2859-bdcb-454e-80bd-6480681a7641.jpg" 
                alt="Яра Белова" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ваш Проводник
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-2xl font-semibold">Яра Белова</p>
                
                <p>
                  Проводник в Новую Реальность, энергопрактик, наставник, целитель.
                </p>
                
                <p>
                  Более <span className="font-bold text-[#E8C170]">11 лет</span> я помогаю людям 
                  освобождаться от ограничивающих сценариев и выходить на новый уровень жизни.
                </p>
                
                <p className="italic border-l-4 border-[#C1665A] pl-4">
                  Я создала этот практикум, чтобы вы могли использовать это сакральное время 
                  с максимальной пользой и наконец-то начали жить своей — по-настоящему 
                  счастливой и изобильной — жизнью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#D4A574] to-[#C1665A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-4xl mb-6">🎁</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A2420] mb-8">
              Бонусы для Ранних Участников
            </h2>
            <p className="text-xl text-[#2A2420]/80">
              Все участники, забронировавшие место до 21 октября, получат:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-[#E8C170]/95 border-[#2A2420]/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Icon name={bonus.icon} className="w-16 h-16 mx-auto mb-6 text-[#6B1F3A]" />
                  <h3 className="text-2xl font-bold text-[#2A2420] mb-4">{bonus.title}</h3>
                  <p className="text-[#2A2420]/80 text-lg">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2A2420]/95 text-[#E8C170]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Формат Участия: «Полное Погружение»
            </h2>
          </div>
          
          <Card className="bg-gradient-to-br from-[#6B1F3A]/40 to-[#C1665A]/40 border-[#E8C170]/30">
            <CardContent className="p-8 space-y-8">
              <p className="text-xl text-center leading-relaxed">
                Мы убрали все лишнее и создали для вас максимально целостный и поддерживающий формат, 
                где есть всё для результата
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Icon name="BookOpen" className="w-12 h-12 text-[#E8C170] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Закрытый канал знаний</h3>
                    <p>Все уроки и практики в одном месте. Смотрите в удобном темпе без ограничений по времени</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="MessageCircle" className="w-12 h-12 text-[#E8C170] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Чат поддержки</h3>
                    <p>Задавайте вопросы, делитесь инсайтами и получайте обратную связь в кругу единомышленников</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-b from-[#C1665A] via-[#D4A574] to-[#E8C170]">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-[#2A2420]/95 border-[#E8C170]/50 shadow-2xl">
            <CardContent className="p-12 text-center text-[#E8C170]">
              <div className="text-5xl mb-6">✦</div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Врата Открыты Ненадолго
              </h2>
              
              <p className="text-xl mb-8 leading-relaxed">
                Не упустите единственный шанс в году переписать код вашего Рода на код Изобилия
              </p>
              
              <div className="bg-[#6B1F3A]/40 rounded-lg p-8 mb-8 border-2 border-[#E8C170]/30">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <p className="text-sm uppercase tracking-wider mb-2 text-[#E8C170]/70">Старт</p>
                    <p className="text-3xl font-bold">31 октября</p>
                  </div>
                  
                  <div>
                    <p className="text-sm uppercase tracking-wider mb-2 text-[#E8C170]/70">Инвестиция</p>
                    <p className="text-3xl font-bold">35 000 ₽</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#C1665A]/30 rounded-lg p-6 mb-8 border border-[#E8C170]/50">
                <p className="text-lg mb-2">🔥 Ранняя цена действует только до</p>
                <p className="text-2xl font-bold">21 октября</p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-[#E8C170] hover:bg-[#D4A574] text-[#2A2420] px-16 py-8 text-xl font-bold rounded-full transition-all duration-300 shadow-2xl hover:scale-110 w-full md:w-auto"
              >
                Забронировать место и получить бонусы
              </Button>
              
              <p className="text-sm mt-6 text-[#E8C170]/70">
                Количество участников ограничено для максимального внимания каждому
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 bg-[#2A2420] text-[#E8C170]/60 text-center">
        <div className="container mx-auto px-4">
          <div className="text-2xl mb-4">✧</div>
          <p>© 2024 Практикум «Код Рода». Яра Белова</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
