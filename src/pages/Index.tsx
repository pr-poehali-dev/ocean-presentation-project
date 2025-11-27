import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Интересные факты о мировом океане',
    content: [
      { icon: 'Waves', text: 'Мировой океан покрывает более 70% поверхности Земли' },
      { icon: 'Fish', text: 'В океане обитает более 2 миллионов видов живых организмов' },
      { icon: 'Mountain', text: 'Самая глубокая точка океана - Марианская впадина (11 км)' },
      { icon: 'Thermometer', text: 'Океан поглощает 90% тепла от глобального потепления' },
      { icon: 'Wind', text: 'Океанские течения влияют на климат всей планеты' }
    ],
    image: 'https://cdn.poehali.dev/projects/3f193b33-f6e8-4cb6-80aa-c888f58f3614/files/3d1e33f3-3e6e-4036-aae0-ab92259f560c.jpg',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Экологические проблемы океана',
    content: [
      { icon: 'Trash2', text: 'Ежегодно в океан попадает 8 миллионов тонн пластика' },
      { icon: 'Factory', text: 'Загрязнение нефтепродуктами уничтожает морскую жизнь' },
      { icon: 'TrendingUp', text: 'Повышение температуры воды вызывает гибель коралловых рифов' },
      { icon: 'Fish', text: 'Чрезмерный вылов рыбы приводит к исчезновению видов' },
      { icon: 'Droplets', text: 'Закисление океана угрожает морской экосистеме' }
    ],
    image: 'https://cdn.poehali.dev/projects/3f193b33-f6e8-4cb6-80aa-c888f58f3614/files/9ff2ab29-53d1-457f-b65f-c6fb5acb12f9.jpg',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 3,
    title: 'Значение океана для планеты',
    content: [
      { icon: 'Wind', text: 'Производит более 50% кислорода в атмосфере' },
      { icon: 'CloudRain', text: 'Регулирует погоду и климат на всей Земле' },
      { icon: 'Apple', text: 'Обеспечивает питанием миллиарды людей' },
      { icon: 'Factory', text: 'Поглощает CO₂ и замедляет изменение климата' },
      { icon: 'Waves', text: 'Является домом для 80% всей жизни на Земле' }
    ],
    image: 'https://cdn.poehali.dev/projects/3f193b33-f6e8-4cb6-80aa-c888f58f3614/files/1ca5d0c7-344d-45ea-8f3e-4414e9141d6b.jpg',
    gradient: 'from-blue-600 to-purple-500'
  },
  {
    id: 4,
    title: 'Как защитить мировой океан',
    content: [
      { icon: 'Recycle', text: 'Сокращайте использование пластика и перерабатывайте отходы' },
      { icon: 'ShoppingBag', text: 'Выбирайте экологичные продукты и упаковку' },
      { icon: 'Users', text: 'Участвуйте в экологических акциях по очистке пляжей' },
      { icon: 'Heart', text: 'Поддерживайте организации, защищающие океан' },
      { icon: 'Lightbulb', text: 'Распространяйте информацию о проблемах океана' }
    ],
    image: 'https://cdn.poehali.dev/projects/3f193b33-f6e8-4cb6-80aa-c888f58f3614/files/3d1e33f3-3e6e-4036-aae0-ab92259f560c.jpg',
    gradient: 'from-green-500 to-emerald-400'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-wave" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-wave" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-wave" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-6xl">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden animate-fade-in">
              <div className={`bg-gradient-to-r ${slide.gradient} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Перейти к слайду ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
              </div>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  {slide.content.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-shadow animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`p-3 bg-gradient-to-r ${slide.gradient} rounded-lg text-white flex-shrink-0`}>
                        <Icon name={item.icon} size={24} />
                      </div>
                      <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${slide.gradient} opacity-20`}></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center p-8 pt-0">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="lg"
                  className="group"
                  disabled={currentSlide === 0}
                >
                  <Icon name="ChevronLeft" size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Назад
                </Button>

                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-12 h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? `bg-gradient-to-r ${slide.gradient}` 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Слайд ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  size="lg"
                  className={`group bg-gradient-to-r ${slide.gradient} hover:opacity-90`}
                  disabled={currentSlide === slides.length - 1}
                >
                  Далее
                  <Icon name="ChevronRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="p-4 text-center">
          <p className="text-gray-600 text-sm">
            🌊 Мировой океан - источник жизни на Земле. Давайте защитим его вместе!
          </p>
        </div>
      </div>
    </div>
  );
}
