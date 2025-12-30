import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, Calendar, Tag, Clock, Share2, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  views: number;
  date: string;
  category: string;
  slug: string;
  readTime: string;
  content: React.ReactNode;
}

const CodeBlock = ({ children, language = "typescript" }: { children: string; language?: string }) => (
  <div className="relative my-6 group">
    <div className="absolute top-0 left-0 right-0 h-10 bg-secondary/80 rounded-t-lg flex items-center justify-between px-4">
      <span className="text-xs text-muted-foreground font-mono">{language}</span>
      <Button
        variant="ghost"
        size="sm"
        className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
        onClick={() => navigator.clipboard.writeText(children)}
      >
        Копировать
      </Button>
    </div>
    <pre className="bg-secondary/50 rounded-lg pt-12 pb-4 px-4 overflow-x-auto border border-glass-border">
      <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
        {children}
      </code>
    </pre>
  </div>
);

const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="px-1.5 py-0.5 bg-secondary/70 rounded text-primary font-mono text-sm">
    {children}
  </code>
);

const Blockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-6 pl-4 border-l-4 border-primary/50 bg-primary/5 py-4 pr-4 rounded-r-lg">
    <p className="text-muted-foreground italic">{children}</p>
  </blockquote>
);

// Данные статьи
const blogPostsData: Record<string, BlogPostData> = {
  "optimizaciya-proizvoditelnosti": {
    id: 1,
    title: "Оптимизация производительности сайта на 1С-Битрикс: полное руководство",
    excerpt: "Разбираем основные методы ускорения работы сайта: кеширование, оптимизация БД, сжатие файлов и настройка серверного окружения.",
    views: 2847,
    date: "2024-12-28",
    category: "Производительность",
    slug: "optimizaciya-proizvoditelnosti",
    readTime: "12 мин",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Производительность сайта — один из ключевых факторов, влияющих на конверсию и позиции в поисковой выдаче. В этой статье разберём основные методы оптимизации сайтов на платформе 1С-Битрикс.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Настройка кеширования компонентов</h2>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          Правильная настройка кеширования — основа производительности любого сайта на Битрикс. Рассмотрим основные параметры компонента каталога:
        </p>

        <CodeBlock language="php">{`<?php
// Настройка кеширования в компоненте каталога
$APPLICATION->IncludeComponent(
    "bitrix:catalog.section",
    "custom_template",
    array(
        "IBLOCK_ID" => CATALOG_IBLOCK_ID,
        "SECTION_ID" => $arResult["ID"],
        
        // Настройки кеширования
        "CACHE_TYPE" => "A",           // Авто-кеширование
        "CACHE_TIME" => 36000000,      // Время жизни кеша в секундах
        "CACHE_GROUPS" => "N",         // Не разделять по группам пользователей
        
        // Важно для производительности
        "SET_BROWSER_TITLE" => "Y",
        "SET_META_KEYWORDS" => "Y",
        "SET_META_DESCRIPTION" => "Y",
    )
);`}</CodeBlock>

        <Blockquote>
          <strong>Важно:</strong> параметр <InlineCode>CACHE_GROUPS</InlineCode> следует устанавливать в "N" только если контент одинаков для всех групп пользователей. В противном случае кеш будет создаваться отдельно для каждой группы.
        </Blockquote>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Оптимизация запросов к базе данных</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Избыточные запросы к БД — частая причина медленной работы сайта. Используйте <InlineCode>arSelect</InlineCode> для выборки только необходимых полей:
        </p>

        <CodeBlock language="php">{`<?php
// Неоптимальный запрос - выбираем все поля
$rsElements = CIBlockElement::GetList(
    ["SORT" => "ASC"],
    ["IBLOCK_ID" => 4, "ACTIVE" => "Y"],
    false,
    false,
    [] // Выбираются ВСЕ поля
);

// Оптимизированный запрос - только нужные поля
$rsElements = CIBlockElement::GetList(
    ["SORT" => "ASC"],
    ["IBLOCK_ID" => 4, "ACTIVE" => "Y"],
    false,
    ["nPageSize" => 20], // Ограничение выборки
    ["ID", "NAME", "DETAIL_PAGE_URL", "PREVIEW_PICTURE"]
);`}</CodeBlock>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Использование индексов</h3>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Проверьте наличие индексов на часто используемых полях. Для анализа запросов используйте встроенный профайлер:
        </p>

        <CodeBlock language="sql">{`-- Добавление индекса на поле сортировки
ALTER TABLE b_iblock_element 
ADD INDEX ix_iblock_sort (IBLOCK_ID, ACTIVE, SORT);

-- Проверка использования индексов
EXPLAIN SELECT * FROM b_iblock_element 
WHERE IBLOCK_ID = 4 AND ACTIVE = 'Y' 
ORDER BY SORT ASC;`}</CodeBlock>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Сжатие и оптимизация файлов</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Настройте gzip-сжатие и минификацию статических файлов через <InlineCode>.htaccess</InlineCode>:
        </p>

        <CodeBlock language="apache">{`# Включение gzip-сжатия
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# Кеширование статических файлов
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>`}</CodeBlock>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Мониторинг производительности</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Используйте встроенные инструменты Битрикс для отслеживания производительности. Включите отладку в <InlineCode>/bitrix/.settings.php</InlineCode>:
        </p>

        <CodeBlock language="php">{`<?php
return [
    'exception_handling' => [
        'value' => [
            'debug' => true,
            'handled_errors_types' => E_ALL & ~E_NOTICE & ~E_STRICT,
            'exception_errors_types' => E_ALL & ~E_NOTICE & ~E_WARNING,
            'log' => [
                'settings' => [
                    'file' => 'bitrix/logs/error.log',
                    'log_size' => 1000000,
                ],
            ],
        ],
    ],
];`}</CodeBlock>

        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-6 mb-6">
          <li>Регулярно проверяйте время генерации страниц в административной панели</li>
          <li>Используйте CDN для статических файлов при высоких нагрузках</li>
          <li>Настройте OPcache для кеширования скомпилированного PHP-кода</li>
          <li>Рассмотрите использование Redis или Memcached для сессий</li>
        </ul>

        <Blockquote>
          <strong>Результат:</strong> правильная настройка кеширования и оптимизация запросов позволяют сократить время загрузки страницы в 3-5 раз, что положительно влияет на поведенческие факторы и конверсию.
        </Blockquote>
      </>
    ),
  },
  "sozdanie-kastomnyh-komponentov": {
    id: 4,
    title: "Создание кастомных компонентов в 1С-Битрикс",
    excerpt: "Архитектура компонентов, шаблоны, кеширование результатов. Примеры создания компонента каталога с нуля.",
    views: 1823,
    date: "2024-12-20",
    category: "Разработка",
    slug: "sozdanie-kastomnyh-komponentov",
    readTime: "15 мин",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Создание собственных компонентов — важный навык для любого разработчика на Битрикс. Разберём архитектуру компонентов и создадим простой компонент с нуля.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Структура компонента</h2>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          Каждый компонент состоит из нескольких обязательных файлов. Создадим компонент <InlineCode>custom:product.card</InlineCode>:
        </p>

        <CodeBlock language="bash">{`# Структура директорий компонента
/local/components/custom/product.card/
├── .description.php      # Описание компонента
├── .parameters.php       # Параметры для настройки
├── component.php         # Логика компонента
├── class.php             # Класс компонента (рекомендуется)
└── templates/
    └── .default/
        ├── template.php  # Шаблон вывода
        ├── style.css     # Стили
        └── script.js     # Скрипты`}</CodeBlock>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Файл описания компонента</h3>

        <CodeBlock language="php">{`<?php
// .description.php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$arComponentDescription = [
    "NAME" => "Карточка товара",
    "DESCRIPTION" => "Выводит карточку товара по ID элемента",
    "ICON" => "/images/icon.gif",
    "SORT" => 10,
    "CACHE_PATH" => "Y",
    "PATH" => [
        "ID" => "custom",
        "NAME" => "Кастомные компоненты",
        "CHILD" => [
            "ID" => "catalog",
            "NAME" => "Каталог",
        ],
    ],
];`}</CodeBlock>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Класс компонента</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Современный подход — использование класса вместо процедурного кода в <InlineCode>component.php</InlineCode>:
        </p>

        <CodeBlock language="php">{`<?php
// class.php
use Bitrix\\Main\\Loader;
use Bitrix\\Main\\Localization\\Loc;

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

class CustomProductCardComponent extends CBitrixComponent
{
    private array $elementData = [];

    public function onPrepareComponentParams($arParams): array
    {
        $arParams["ELEMENT_ID"] = (int)($arParams["ELEMENT_ID"] ?? 0);
        $arParams["IBLOCK_ID"] = (int)($arParams["IBLOCK_ID"] ?? 0);
        $arParams["CACHE_TIME"] = (int)($arParams["CACHE_TIME"] ?? 3600);
        
        return $arParams;
    }

    public function executeComponent(): void
    {
        if (!Loader::includeModule("iblock")) {
            return;
        }

        if ($this->startResultCache()) {
            $this->loadElement();
            
            if (empty($this->elementData)) {
                $this->abortResultCache();
                return;
            }

            $this->arResult = $this->elementData;
            $this->includeComponentTemplate();
        }
    }

    private function loadElement(): void
    {
        $rsElement = \\CIBlockElement::GetList(
            [],
            [
                "ID" => $this->arParams["ELEMENT_ID"],
                "IBLOCK_ID" => $this->arParams["IBLOCK_ID"],
                "ACTIVE" => "Y",
            ],
            false,
            false,
            ["ID", "NAME", "DETAIL_TEXT", "PREVIEW_PICTURE"]
        );

        if ($arElement = $rsElement->GetNext()) {
            $this->elementData = $arElement;
        }
    }
}`}</CodeBlock>

        <Blockquote>
          <strong>Совет:</strong> всегда используйте метод <InlineCode>onPrepareComponentParams</InlineCode> для валидации входных параметров. Это защитит от ошибок при некорректных данных.
        </Blockquote>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Шаблон компонента</h2>

        <CodeBlock language="php">{`<?php
// templates/.default/template.php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arResult */
/** @var array $arParams */
?>

<div class="product-card" data-id="<?= $arResult['ID'] ?>">
    <?php if ($arResult['PREVIEW_PICTURE']): ?>
        <div class="product-card__image">
            <img 
                src="<?= CFile::GetPath($arResult['PREVIEW_PICTURE']) ?>" 
                alt="<?= htmlspecialchars($arResult['NAME']) ?>"
                loading="lazy"
            >
        </div>
    <?php endif; ?>
    
    <div class="product-card__content">
        <h3 class="product-card__title">
            <?= htmlspecialchars($arResult['NAME']) ?>
        </h3>
        
        <?php if ($arResult['DETAIL_TEXT']): ?>
            <div class="product-card__description">
                <?= $arResult['DETAIL_TEXT'] ?>
            </div>
        <?php endif; ?>
    </div>
</div>`}</CodeBlock>

        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-6 mb-6">
          <li>Используйте <InlineCode>htmlspecialchars()</InlineCode> для экранирования пользовательских данных</li>
          <li>Добавляйте <InlineCode>loading="lazy"</InlineCode> для изображений ниже первого экрана</li>
          <li>Разделяйте логику и представление — сложные вычисления в класс, вывод в шаблон</li>
          <li>Не забывайте про мобильную адаптацию в стилях компонента</li>
        </ul>
      </>
    ),
  },
  "rest-api-bitrix": {
    id: 9,
    title: "REST API в 1С-Битрикс: создание и использование",
    excerpt: "Разработка собственного REST API, авторизация OAuth 2.0, документирование endpoints и тестирование.",
    views: 1756,
    date: "2024-12-08",
    category: "Разработка",
    slug: "rest-api-bitrix",
    readTime: "18 мин",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          REST API позволяет интегрировать сайт на Битрикс с внешними системами: мобильными приложениями, CRM, службами доставки. Рассмотрим создание собственного API с нуля.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Создание контроллера API</h2>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          В Битрикс для создания REST API используется класс <InlineCode>Controller</InlineCode>. Создадим контроллер для работы с каталогом товаров:
        </p>

        <CodeBlock language="php">{`<?php
// /local/modules/custom.api/lib/controller/catalog.php
namespace Custom\\Api\\Controller;

use Bitrix\\Main\\Engine\\Controller;
use Bitrix\\Main\\Engine\\ActionFilter;
use Bitrix\\Main\\Loader;

class Catalog extends Controller
{
    public function configureActions(): array
    {
        return [
            'list' => [
                'prefilters' => [
                    new ActionFilter\\HttpMethod(['GET']),
                    new ActionFilter\\Csrf(false),
                ],
            ],
            'detail' => [
                'prefilters' => [
                    new ActionFilter\\HttpMethod(['GET']),
                    new ActionFilter\\Csrf(false),
                ],
            ],
        ];
    }

    public function listAction(int $page = 1, int $limit = 20): array
    {
        Loader::includeModule('iblock');

        $offset = ($page - 1) * $limit;
        $items = [];

        $rsElements = \\CIBlockElement::GetList(
            ['SORT' => 'ASC'],
            ['IBLOCK_ID' => CATALOG_IBLOCK_ID, 'ACTIVE' => 'Y'],
            false,
            ['nPageSize' => $limit, 'iNumPage' => $page],
            ['ID', 'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL']
        );

        while ($arElement = $rsElements->GetNext()) {
            $items[] = [
                'id' => (int)$arElement['ID'],
                'name' => $arElement['NAME'],
                'code' => $arElement['CODE'],
                'url' => $arElement['DETAIL_PAGE_URL'],
                'image' => $arElement['PREVIEW_PICTURE'] 
                    ? \\CFile::GetPath($arElement['PREVIEW_PICTURE']) 
                    : null,
            ];
        }

        return [
            'items' => $items,
            'pagination' => [
                'page' => $page,
                'limit' => $limit,
                'total' => $rsElements->NavRecordCount,
            ],
        ];
    }
}`}</CodeBlock>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Авторизация через токен</h2>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Для защиты API создадим фильтр проверки токена авторизации:
        </p>

        <CodeBlock language="php">{`<?php
// /local/modules/custom.api/lib/filter/tokenauth.php
namespace Custom\\Api\\Filter;

use Bitrix\\Main\\Engine\\ActionFilter\\Base;
use Bitrix\\Main\\Error;
use Bitrix\\Main\\Event;
use Bitrix\\Main\\EventResult;

class TokenAuth extends Base
{
    public function onBeforeAction(Event $event): ?EventResult
    {
        $token = $this->getRequest()->getHeader('X-Api-Token');
        
        if (empty($token)) {
            $token = $this->getRequest()->get('token');
        }

        if (!$this->validateToken($token)) {
            $this->addError(new Error(
                'Неверный токен авторизации',
                'INVALID_TOKEN',
                ['status' => 401]
            ));
            
            return new EventResult(
                EventResult::ERROR,
                null,
                null,
                $this
            );
        }

        return null;
    }

    private function validateToken(?string $token): bool
    {
        if (empty($token)) {
            return false;
        }

        // Проверка токена в базе данных
        $rsToken = \\Bitrix\\Main\\UserTable::getList([
            'filter' => ['UF_API_TOKEN' => $token, 'ACTIVE' => 'Y'],
            'select' => ['ID'],
            'limit' => 1,
        ]);

        return (bool)$rsToken->fetch();
    }
}`}</CodeBlock>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Использование фильтра в контроллере</h3>

        <CodeBlock language="php">{`<?php
public function configureActions(): array
{
    return [
        'list' => [
            'prefilters' => [
                new ActionFilter\\HttpMethod(['GET']),
                new ActionFilter\\Csrf(false),
                new \\Custom\\Api\\Filter\\TokenAuth(),
            ],
        ],
    ];
}`}</CodeBlock>

        <Blockquote>
          <strong>Безопасность:</strong> никогда не храните токены в открытом виде. Используйте хеширование с <InlineCode>password_hash()</InlineCode> для хранения и <InlineCode>password_verify()</InlineCode> для проверки.
        </Blockquote>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Примеры запросов</h2>

        <CodeBlock language="bash">{`# Получение списка товаров
curl -X GET "https://site.ru/api/catalog/list?page=1&limit=10" \\
  -H "X-Api-Token: your-api-token"

# Ответ
{
  "status": "success",
  "data": {
    "items": [
      {
        "id": 123,
        "name": "Товар 1",
        "code": "tovar-1",
        "url": "/catalog/tovar-1/",
        "image": "/upload/iblock/abc/image.jpg"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 156
    }
  }
}`}</CodeBlock>

        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-6 mb-6">
          <li>Используйте версионирование API: <InlineCode>/api/v1/catalog</InlineCode></li>
          <li>Возвращайте корректные HTTP-коды: 200, 201, 400, 401, 404, 500</li>
          <li>Документируйте API с помощью OpenAPI/Swagger</li>
          <li>Настройте CORS для доступа с других доменов</li>
        </ul>
      </>
    ),
  },
};

// Связанные статьи
const relatedPosts = [
  { title: "Работа с инфоблоками: best practices", slug: "rabota-s-infoblokami", category: "Разработка" },
  { title: "Отладка и логирование в 1С-Битрикс", slug: "otladka-i-logirovanie", category: "Разработка" },
  { title: "Интеграция 1С:Предприятие с интернет-магазином", slug: "integratsiya-1c-predpriyatie", category: "Интеграции" },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = slug ? blogPostsData[slug] : null;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-foreground mb-4">Статья не найдена</h1>
              <p className="text-muted-foreground mb-8">К сожалению, запрашиваемая статья не существует.</p>
              <Link to="/blog">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Вернуться к списку статей
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <section className="py-4 border-b border-glass-border">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Блог</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground truncate max-w-[300px]">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Все статьи
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Tag className="w-3.5 h-3.5" />
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {post.views} просмотров
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} чтения
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-6 md:p-10"
              >
                <div className="prose prose-invert prose-lg max-w-none">
                  {post.content}
                </div>

                {/* Share */}
                <div className="mt-12 pt-8 border-t border-glass-border">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <span className="text-muted-foreground">Поделиться статьёй:</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Похожие статьи
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={index}
                      to={`/blog/${relatedPost.slug}`}
                      className="glass-card-hover p-5 group"
                    >
                      <span className="text-xs text-primary font-medium mb-2 block">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Back to Blog */}
              <div className="text-center mt-12">
                <Link to="/blog">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Вернуться к списку статей
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
